// Playhouse SMP - Smart Background Slideshow with Progressive Loading
// Loads first 2 backgrounds immediately, then progressively loads the rest
// Filters out corrupted/missing images to prevent purple screens

$(document).ready(() => {
    console.log('🎬 Starting background slideshow initialization...');

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    // Use the randomly preloaded backgrounds from index.html
    const priorityImages = window.preloadedBackgrounds || [
        'pics/background/1.jpg',
        'pics/background/2.jpg'
    ];

    console.log(`📋 Progressive loading strategy: Using preloaded backgrounds ${priorityImages.join(', ')}`);

    // Create array of all other images and shuffle
    const allImages = Array.from({ length: 87 }, (_, i) => `pics/background/${i + 1}.jpg`);
    const remainingImages = allImages.filter(img => !priorityImages.includes(img));
    shuffle(remainingImages);

    const validImages = [];
    let totalLoaded = 0;
    let slideshowStarted = false;

    // Load an image and validate it
    const loadImage = (imagePath) => {
        return new Promise((resolve) => {
            const img = new Image();
            const startTime = Date.now();

            img.onload = () => {
                const loadTime = Date.now() - startTime;
                totalLoaded++;
                validImages.push(imagePath);
                console.log(`✅ [${totalLoaded}] Loaded in ${loadTime}ms: ${imagePath}`);
                resolve(true);
            };

            img.onerror = () => {
                console.log(`⏭️  Skipped (missing): ${imagePath}`);
                resolve(false);
            };

            img.src = imagePath;
        });
    };

    // PHASE 1: Load initial batch of backgrounds (preloaded + next 20 = ~22 total)
    // This provides fast load + good variety without DOM pollution
    console.log(`⚡ Phase 1: Loading initial batch of backgrounds...`);

    const initialBatchSize = 20; // Load 2 preloaded + 20 more = 22 total
    const initialBatch = [...priorityImages, ...remainingImages.slice(0, initialBatchSize)];

    // Remove these from remainingImages so we don't load them twice
    remainingImages.splice(0, initialBatchSize);

    Promise.all(initialBatch.map(loadImage)).then(() => {
        if (validImages.length > 0) {
            console.log(`✅ Loaded ${validImages.length} backgrounds! Starting slideshow...`);

            // Start slideshow ONCE with initial batch - NEVER reinitialize
            $("body").backgroundSlideshow({
                transitionDuration: 3000,
                fixed: true,
                images: validImages
            });

            slideshowStarted = true;
            console.log('🎬 Slideshow started! Loading remaining backgrounds in background...\n');

            // PHASE 2: Load remaining backgrounds progressively (but don't update slideshow)
            loadRemainingBackgrounds();
        } else {
            console.error(`❌ Failed to load any backgrounds. Check image paths.`);
        }
    });

    // Load remaining backgrounds in the background
    function loadRemainingBackgrounds() {
        console.log(`🔄 Phase 2: Loading ${remainingImages.length} remaining backgrounds in background...`);
        console.log(`   (Slideshow will continue with currently loaded images)`);

        // Load in batches of 5 to avoid overwhelming the browser
        const batchSize = 5;
        let currentBatch = 0;

        function loadNextBatch() {
            const start = currentBatch * batchSize;
            const end = Math.min(start + batchSize, remainingImages.length);
            const batch = remainingImages.slice(start, end);

            if (batch.length === 0) {
                console.log(`\n📊 ===== FINAL SUMMARY =====`);
                console.log(`   ✅ Total valid backgrounds: ${validImages.length}`);
                console.log(`   🎬 Slideshow running smoothly!`);
                console.log(`===========================\n`);
                return;
            }

            Promise.all(batch.map(loadImage)).then(() => {
                // Just load images, DON'T reinitialize slideshow
                // (Reinitializing creates duplicate div layers)

                currentBatch++;
                // Continue loading next batch after a short delay
                setTimeout(loadNextBatch, 500);
            });
        }

        loadNextBatch();
    }
});
