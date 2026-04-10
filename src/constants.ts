function getEnv(key: string): string | undefined {
  const value = process.env[key];
  // if is empty, return undefined
  if (value === "") {
    return undefined;
  }
  return value;
}

const url = getEnv("URL") ?? "https://yfn-roadmap-ten.vercel.app";
const yfnUrl = getEnv("YFN_URL") ?? "https://youngfounders.network";
const baseUrl = getEnv("BASE_URL") ?? "/";
const githubUrl = "https://github.com/yfndev/yfn-roadmap";

export { url, yfnUrl, baseUrl, githubUrl };
