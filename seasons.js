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
        downloadLink: "https://drive.google.com/uc?export=download&id=1EbLhIqhJRYIpChFAf5R05F_sOeVlKSV0",
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
        description: "Dive into the creative and mechanical wonders of the <a href='https://www.curseforge.com/minecraft/mc-mods/create' target='_blank' style='color: #FFD700; text-decoration: none; border-bottom: 1px dotted #FFD700; transition: all 0.2s ease-in-out;' onmouseover=\"this.style.textDecoration='underline'; this.style.cursor='pointer';\" onmouseout=\"this.style.textDecoration='none';\">Create Mod</a>. Experience a unique world filled with endless possibilities and engineering marvels.",
        thumbnail: "pics/season/create_mod.png", // Ensure you have this image in the correct path
        downloadLink: "https://drive.google.com/uc?export=download&id=1BWz5KglqcO-7zv1y-pxY2WZGM7eVjfz0", // Correct download link
        size: "1.22 GB" // Correct size
    },
    {
        title: "Cobblemon Event",
        description: "Experience the unique <a href='https://cobblemon.com/en' target='_blank' style='color: #FFD700; text-decoration: none; border-bottom: 1px dotted #FFD700; transition: all 0.2s ease-in-out;' onmouseover=\"this.style.textDecoration='underline'; this.style.cursor='pointer';\" onmouseout=\"this.style.textDecoration='none';\">Cobblemon</a> event world — a crossover between Minecraft and Pokémon! Explore, catch, and battle in this special event world.",
        thumbnail: "pics/season/cobblemon.png", // Temporary image placeholder
        downloadLink: "https://drive.google.com/uc?export=download&id=1kAhF1IHxolBSa0ZxtJ-L7cs-raOpfYp9", 
        size: "1.69 GB" // Temporary test size
    },
    {
        title: "Season 6",
        description: "Our most ambitious season yet! Explore incredible builds, shop at <strong>Allay Alley</strong> mall, and visit the <strong>Industrial District Mega Farms</strong>. Features community events like Scootball and the Trial Chamber Circuit.",
        thumbnail: "pics/season/s6.png",
        downloadLink: "https://drive.google.com/uc?export=download&id=12STcjTPjyEl_zaMlEkScrvg1M-7_5ACR",
        size: "2.0 GB"
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
        description.innerHTML = season.description;

        // Add size
        const size = document.createElement('p');
        size.className = 'card-text size-text';
        size.innerHTML = `<small><strong>Size:</strong> ${season.size}</small>`;

        // Add download link
        const downloadLink = document.createElement('a');
        downloadLink.href = season.downloadLink;
        downloadLink.className = 'btn btn-primary btn-dl';
        downloadLink.textContent = 'Download';
        downloadLink.target = '_blank';
        downloadLink.rel = 'noopener noreferrer';

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
