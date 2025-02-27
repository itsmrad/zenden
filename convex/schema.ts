import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.string(),
  }).index('by_email', ['email']),  // Add index for email queries
  
  teams: defineTable({
    name: v.string(),
    createdBy: v.string(),
    // Add other team fields as needed
  }).index('by_name', ['name']),    // Add index for name queries
});