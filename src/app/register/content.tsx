"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Step from "@/components/Step";
import ProgressBar from "@/components/ProgressBar";
import RadioButton from "./RadioButton";
import JoinTeam from "./JoinTeam";
import { supabase } from "../../lib/supabaseClient";
import { MemberInformationsDetails } from "./MemberInformationsDetails";
import FormInput from "@/components/FormInput";
import { dataRegistrationProps } from "@/utils/validation";
import Link from "next/link";

export default function Content() {
  const [step, setStep] = useState(0);
  const [teamType, setTeamType] = useState("solo");
  const [teamAction, setTeamAction] = useState("create");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registeredTeamId, setRegisteredTeamId] = useState("");
  const [formData, setFormData] = useState({
    teamAction: "create",
    teamId: "",
    teamName: "",
    teamMembers: "solo",
    membersCount: 1,
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    wilaya: "",
    dob: "",
  });

  const storeTeamRegistration = async (formData: dataRegistrationProps) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("teams")
        .insert([
          {
            name: formData.teamName,
            is_solo: formData.teamMembers === "solo",
          },
        ])
        .select("id");

      if (data) {
        const teamId = data[0].id as string;

        await supabase
          .from("participants")
          .insert([
            {
              first_name: formData.firstName,
              last_name: formData.lastName,
              birth_date: formData.dob,
              email: formData.email,
              phone_number: formData.phone,
              wilaya: formData.wilaya,
              team_id: teamId,
            },
          ])
          .select();

        // Save the team ID for the thank you page
        setRegisteredTeamId(teamId);
      }

      if (error) {
        setError(
          `An error occurred while registering the team, please try again`
        );
      } else {
        // Move to the thank you step
        nextStep();
      }
      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setError(`An error occurred while registering the team: ${error}.`);
    }
  };

  const storeMemberRegistration = async (formData: dataRegistrationProps) => {
    try {
      setIsLoading(true);

      // First check if the team exists and get its details
      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .select("is_solo, participants(*)")
        .eq("id", formData.teamId)
        .single();

      if (teamError) {
        throw new Error("Team not found");
      }

      if (!teamData) {
        throw new Error("Invalid team ID");
      }

      // Check team constraints
      const teamMembers = teamData.participants;
      if (teamData.is_solo) {
        throw new Error("Cannot join a solo team");
      }

      if (teamMembers.length >= 4) {
        throw new Error("The team is already full (maximum 4 members)");
      }

      // Insert the new team member
      const { error: insertError } = await supabase
        .from("participants")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            birth_date: formData.dob,
            email: formData.email,
            phone_number: formData.phone,
            wilaya: formData.wilaya,
            team_id: formData.teamId,
          },
        ]);

      if (insertError) {
        throw new Error("Failed to register team member");
      }

      // Set the registered team ID and move to next step
      setRegisteredTeamId(formData.teamId);
      setError("");
      nextStep();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamType(e.target.value);
    setFormData({
      ...formData,
      teamMembers: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    if (teamAction === "create") {
      await storeTeamRegistration(formData);
    } else {
      await storeMemberRegistration(formData);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgmaze.png"
          alt="Background Maze"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            <p className="text-white font-medium">
              Processing your registration...
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-24 px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-8"
        >
          POLYMAZE Registration
        </motion.h1>

        {/* Progress bar */}
        <ProgressBar currentStep={step} totalSteps={4} />

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full max-w-3xl"
        >
          {/* Step 0: Welcome */}
          <Step
            isActive={step === 0}
            stepNumber={0}
            onNext={nextStep}
            isFirstStep={true}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to POLYMAZE
            </h2>
            <p className="text-white mb-6">
              <span className="font-bold">Welcome to POLYMAZE,</span> an
              exhilarating robotic competition where innovation meets adventure!
              This is your chance to showcase your skills in programming,
              electronics, and mechanical design while competing against the
              brightest minds in robotics. Join us for an unforgettable
              experience filled with creativity and cutting-edge technology. Are
              you ready to take on the Polymaze challenge and prove your
              prowess?
              <br />
              <br />
              Sign up now and let your robotic journey begin!
            </p>
          </Step>

          {/* Step 1: Team Information */}
          <Step
            isActive={step === 1}
            stepNumber={1}
            onNext={() => {
              if (teamAction === "create" && formData.teamName.trim() === "") {
                setError("Team Name is required.");
              } else {
                if (teamAction === "join" && formData.teamId.trim() === "") {
                  setError("Team ID is required.");
                } else {
                  setError("");
                  nextStep();
                }
              }
            }}
            onPrevious={prevStep}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Team Registration
            </h2>

            <div className="mb-6">
              <p className="text-white mb-3">
                Would you like to create a new team or join an existing one?
              </p>
              <div className="flex gap-6">
                <RadioButton
                  name="teamAction"
                  value="create"
                  checked={teamAction === "create"}
                  onChange={(e) => {
                    setTeamAction(e.target.value);
                    setFormData({
                      ...formData,
                      teamAction: e.target.value,
                    });
                  }}
                  label="Create a team"
                />

                <RadioButton
                  name="teamAction"
                  value="join"
                  checked={teamAction === "join"}
                  onChange={(e) => {
                    setTeamAction(e.target.value);
                    setFormData({
                      ...formData,
                      teamAction: e.target.value,
                    });
                  }}
                  label="Join a team"
                />
              </div>
            </div>

            {/* Create Team Options */}
            {teamAction === "create" && (
              <>
                <div className="mb-6">
                  <p className="text-white mb-3">
                    Will you participate solo or in a team?
                  </p>
                  <div className="flex gap-6">
                    <RadioButton
                      name="teamMembers"
                      value="solo"
                      checked={teamType === "solo"}
                      onChange={handleRadioChange}
                      label="Solo"
                    />

                    <RadioButton
                      name="teamMembers"
                      value="team"
                      checked={teamType === "team"}
                      onChange={handleRadioChange}
                      label="In a team"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <FormInput
                    type="text"
                    label="Team Name"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    placeholder="Enter your team name"
                    required={teamAction === "create"}
                  />
                </div>
              </>
            )}

            {teamAction === "join" && (
              <JoinTeam teamId={formData.teamId} onChange={handleInputChange} />
            )}
          </Step>

          {/* Step 2: Additional Details */}
          <Step
            isActive={step === 2}
            stepNumber={2}
            onNext={() => {
              // Validate required fields before submission
              if (
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.phone ||
                !formData.wilaya ||
                !formData.dob
              ) {
                setError("Please fill in all required fields");
                return;
              }
              const reactEvent = {
                preventDefault: () => {},
              } as React.FormEvent;
              handleSubmit(reactEvent);
            }}
            onPrevious={prevStep}
            isLastStep={true}
          >
            <MemberInformationsDetails
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </Step>

          {/* Step 3: Thank You Page */}
          <Step
            isActive={step === 3}
            stepNumber={3}
            isLastStep={false}
            hideNavigation={true}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="w-24 h-24 rounded-full bg-green-500 mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Registration Complete!
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 mb-8 text-lg"
              >
                Thank you for registering for POLYMAZE. Your participation has
                been confirmed.
              </motion.p>
              {registeredTeamId && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8 inline-block"
                >
                  <h3 className="text-gray-400 text-sm mb-2">YOUR TEAM ID</h3>
                  <p className="text-2xl font-mono font-bold text-white tracking-wider">
                    {registeredTeamId}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Keep this ID safe - you will need it for the competition
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black py-3 px-8 rounded-lg font-medium"
                  >
                    Return to Home Page
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </Step>

          {error && (
            <div className="fixed bottom-4 right-4 z-50">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onAnimationComplete={() => {
                    // Clear error after 10 seconds
                    setTimeout(() => {
                      setError("");
                    }, 1000);
                  }}
                >
                  <ErrorAlert message={error} />
                </motion.div>
              )}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Custom alert component that displays error messages
const ErrorAlert = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <Alert variant="destructive" className="mt-4 bg-red-600 text-white">
      <AlertCircle className="h-4 w-4 text-white" />
      <div>
        <AlertTitle className="text-white">Error</AlertTitle>
        <AlertDescription className="text-white">{message}</AlertDescription>
      </div>
    </Alert>
  );
};
