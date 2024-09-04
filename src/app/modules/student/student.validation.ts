import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1, "First Name is Required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last Name is Required"),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father Name is Required"),
  fatherOccupation: z.string().min(1, "Father Occupation is Required"),
  fatherContactNo: z.string().min(1, "Father Contact Number is Required"),
  motherName: z.string().min(1, "Mother Name is Required"),
  motherOccupation: z.string().min(1, "Mother Occupation is Required").optional(),
  motherContactNo: z.string().min(1, "Mother Contact Number is Required"),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local Guardian Name is Required"),
  occupation: z.string().min(1, "Occupation is Required").optional(),
  contactNo: z.string().min(1, "Contact Number is Required"),
  address: z.string().min(1, "Address is Required"),
});

const studentValidationSchema = z.object({
  id: z.string().optional(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: "Gender must be either 'male', 'female', or 'other'" }),
  }),
  dateOfBirth: z.string().min(1, "Date of Birth is Required"),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(1, "Contact Number is Required"),
  emergencyContactNo: z.string().min(1, "Emergency Contact Number is Required"),
  bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().min(1, "Present Address is Required"),
  permanentAddres: z.string().min(1, "Permanent Address is Required"),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export const validateStudent = (data: unknown) => {
  return studentValidationSchema.safeParse(data);
};
