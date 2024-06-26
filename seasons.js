// Array of season data
const seasons = [
    {
        title: "Season 1",
        description: "Explore the beginnings of Playhouse SMP in our first ever season",
        thumbnail: "pics/season/s1.jpg",
        downloadLink: "https://drive.google.com/uc?export=download&id=1EFVcjHKW3RRS91H0RHFXkiOlZFdgTp5q",
        size: "2.17 GB"
    },
    {
        title: "Season 2",
        description: "Continue the adventure in our second thrilling season",
        thumbnail: "pics/season/s2.jpg",
        downloadLink: "https://drive.google.com/uc?export=download&id=1Uh0I3YFwLEuWbYssLxwG82fogAe1XykD",
        size: "2.12 GB"
    },
    {
        title: "Season 4",
        description: "Download the adventures from our fourth season",
        thumbnail: "pics/season/s4.jpg",
        downloadLink: "https://drive.google.com/uc?export=download&id=18ljToQ5u3T1MbcUr0LVyZ94lZRYBfhaN",
        size: "2.76 GB"
    },
    {
        title: "Skyblock Modded",
        description: "We use a modded skyblock called Infinite Skyblock. Take on the unique challenges of this customized skyblock adventure.",
        thumbnail: "pics/season/skyblock.png",
        downloadLink: "https://drive.google.com/uc?export=download&id=19VpWrNW_q7rvAmt90LPc32D7_ecokCtt",
        size: "186 MB"
    },
    {
        title: "Season 5",
        description: "Relive the epic adventures and unforgettable moments from our fifth season. Thanks to everyone who joined us for this incredible journey!",
        thumbnail: "pics/season/s5.jpg", // Ensure you have this image in the correct path
        downloadLink: "https://drive.google.com/uc?export=download&id=1AKQ8KpjEZZ_ZBt6b9kb5yQbtBaKV28vW", // Correct download link
        size: "2.52 GB" // Correct size
    },
    {
        title: "Create Mod World",
        description: "Dive into the creative and mechanical wonders of the Create Mod. Experience a unique world filled with endless possibilities and engineering marvels.",
        thumbnail: "pics/season/create_mod.png", // Ensure you have this image in the correct path
        downloadLink: "https://drive.google.com/uc?export=download&id=1BWz5KglqcO-7zv1y-pxY2WZGM7eVjfz0", // Correct download link
        size: "1.22 GB" // Correct size
    }
    
];

function renderSeasons() {
    const container = document.getElementById('seasonsContainer');

    // Clear existing content
    container.innerHTML = '';

    seasons.forEach(season => {
        // Create card column
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        // Create card container
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        // Add image
        const img = document.createElement('img');
        img.src = season.thumbnail;
        img.className = 'card-img-top';
        img.alt = `${season.title} Thumbnail`;

        // Create card body
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        // Add title
        const title = document.createElement('h5');
        title.className = 'card-title styled-title'; // Added a new class for styling
        title.textContent = season.title;

        // Add description
        const description = document.createElement('p');
        description.className = 'card-text styled-desc';
        description.textContent = season.description;

        // Add size
        const size = document.createElement('p');
        size.className = 'card-text size-text';
        size.innerHTML = `<small><strong>Size:</strong> ${season.size}</small>`;

        // Add download link
        const downloadLink = document.createElement('a');
        downloadLink.href = season.downloadLink;
        downloadLink.className = 'btn btn-primary btn-dl';
        downloadLink.textContent = 'Download';

        // Assemble card body
        cardBodyDiv.appendChild(title);
        cardBodyDiv.appendChild(description);
        cardBodyDiv.appendChild(size); // Add size to the card body
        cardBodyDiv.appendChild(downloadLink);

        // Assemble card
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        // Assemble column
        colDiv.appendChild(cardDiv);

        // Append to the container
        container.appendChild(colDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderSeasons);
