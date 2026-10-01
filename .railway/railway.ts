import { bucket, defineRailway, github, group, postgres, preserve, project, service, volume } from "railway/iac";

export default defineRailway(() => {
  const Postgres = postgres("Postgres", { region: "europe-west4-drams3a" });
  Postgres.networking = { privateNetworkEndpoint: "postgres", tcpProxies: { "5432": {} } };
  const postgresVolume = volume("postgres-volume", { alerts: { usage: { "100": {}, "80": {}, "95": {} } }, allowOnlineResize: true, region: "europe-west4-drams3a", sizeMB: 50000 });
  const structuredBucket = bucket("structured-bucket", { region: "ams" });
  const payloadRailway = service("payload-railway", {
    source: github("DaanvanMaren/verandazeeland", { checkSuites: false, upstreamUrl: "https://github.com/web-bvdo/payload-railway" }),
    start: "npm run migrate && npm start",
    replicas: { "europe-west4-drams3a": 1 },
    deploy: { limitOverride: { containers: { cpu: 4, memoryBytes: 4000000000 } }, sleepApplication: true },
    env: { DATABASE_URI: preserve(), PAYLOAD_SECRET: preserve(), S3_ACCESS_KEY_ID: preserve(), S3_BUCKET: preserve(), S3_ENDPOINT: preserve(), S3_REGION: preserve(), S3_SECRET_ACCESS_KEY: preserve() },
  });
  const Payload = group("Payload", [payloadRailway, Postgres]);

  return project("verandazeeland", {
    resources: [postgresVolume, structuredBucket, Payload],
  });
});
