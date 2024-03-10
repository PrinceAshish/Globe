import { PrismaClient } from "@prisma/client";
import { UserType } from "../utils/types";

const prisma = new PrismaClient();

export const isUserExist = async (
  type: UserType,
  value: string
): Promise<boolean> => {
  try {
    const where: any = {
      [type]: value,
    };

    const user = await prisma.user.findUnique({
      where: where,
    });

    return !!user; // Return true if user exists, false otherwise
  } catch (error) {
    console.error("Error checking user existence:", error);
    return false;
  }
};
