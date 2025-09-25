import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import { withWorkflow } from "@vercel/workflow-next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

const toolbarConfig = withVercelToolbar()(nextConfig);
const workflowConfig = withWorkflow(toolbarConfig);

export default workflowConfig;
