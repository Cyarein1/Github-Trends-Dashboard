import { fetchGithubData, processGithubData } from "@/lib/github";

export async function GET() {
  try {
    const rawData = await fetchGithubData();
    const processedData = processGithubData(rawData);

    return processedData;
  } catch (error) {
    return Response.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 }
    );
  }
}
