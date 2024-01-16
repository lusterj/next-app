type Experiences = {
    title: string;
    location: string;
}

async function getExperiences() {
    try {
        const headers = new Headers();
        headers.append('Way-Brand-Id', '10e93e39-b203-428a-acb1-4b1256222d4d');  // Replace with your actual brand id
        headers.append('Way-Secret-Key', 'MXycRVs-kA_XfX2dnwGgiLCFnAUxxra-CybWeuJtj2');  // Replace with your actual secret key

        const requestOptions = {
            method: 'GET',
            headers: headers,
        };

        const res = await fetch('https://api.staging.letsway.com/v1/brands/10e93e39-b203-428a-acb1-4b1256222d4d/experiences', requestOptions);
        if (!res.ok) {
            throw new Error('API call failed: ' + res.status);
        }
        const data = await res.json();
        return data.items || []; // Return the items array or an empty array if items is undefined
    } catch (error) {
        console.error('Failed to fetch experiences:', error);
        return []; // Return an empty array in case of error
    }
}

export default async function SampleCard() {
    const experiences = await getExperiences()
    return (
      <>
      <div>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <img src={experience.coverPicture.uri.original} alt={experience.title} />
            <div>
              <div>{experience.title}</div>
              <div dangerouslySetInnerHTML={{ __html: experience.description.slice(0,50) }}/>
              <div>${experience.priceTiers[0].price} per participant</div>
              <div>{experience.location.name}</div>
            </div>
          </div>
          
        ))}
      </div>
      </>
    );
  }