
export async function GetTechnologieService(id: string) {
    const res = await fetch(`${process.env.API_URL}/api/technologies/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}