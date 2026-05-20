import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  role: z.string().min(1, "Role is required"),
  propertyAddress: z.string().min(1, "Property address is required"),
  isProbateOrInherited: z.string().optional().default(""),
  numberOfHeirs: z.string().optional().default(""),
  titleIssues: z.string().optional().default(""),
  solutionType: z.string().min(1, "Solution type is required"),
  description: z.string().min(1, "Description is required"),
});

export type ConsultationPayload = z.infer<typeof consultationSchema>;
