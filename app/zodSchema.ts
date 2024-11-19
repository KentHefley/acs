import {z} from "zod";

export const submissionSchema = z.object ({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(1),
    message: z.string().min(5),
    file: z.instanceof(File).optional(),
})
