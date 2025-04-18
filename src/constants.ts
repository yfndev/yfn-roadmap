function getEnv(key: string): string | undefined {
  const value = process.env[key];
  // if is empty, return undefined
  if (value === "") {
    return undefined;
  }
  return value;
}

const url = getEnv("URL") ?? "https://youngfounders.network/roadmap";
const yfnUrl = getEnv("YFN_URL") ?? "https://youngfounders.network";
const baseUrl = getEnv("BASE_URL") ?? "/roadmap";
const githubUrl = "https://github.com/yfndev/yfn-roadmap";

export { url, yfnUrl, baseUrl, githubUrl };
