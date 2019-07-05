import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        seePayment: (_, __, { request }) => {
            const { user } = request; 
            return prisma.payments({
                where: {
                    user: {
                        id: user.id 
                    }
                }
            })
        }
    }
}