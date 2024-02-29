import { PrismaClient } from "@prisma/client";
// import NotFoundError from "../../errors/NotFoundError.js";

const getUserOrders = async (userId) => {
  const prisma = new PrismaClient();
  const userOrders = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      orders: true,
    },
  });
  if (!userOrders) {
    // throw new NotFoundError("User", userId);
    throw new Error(`User with id ${userId} not found`);
  }
  return userOrders;
};

export default getUserOrders;
