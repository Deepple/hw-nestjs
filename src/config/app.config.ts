import { registerAs } from "@nestjs/config";

export default registerAs("app", () => ({
    node_env: process.env.NODE_ENV,
    port: process.env.APP_PORT,
}));
