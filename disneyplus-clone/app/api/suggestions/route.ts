export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  const res = await fetch(
    `https://disney-clone-azure.azurewebsites.net/api/getaisuggestion?term=${term}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  const message = await res.text();
  console.log("AISuggestion Response:", message);

  return Response.json({ message });
}
