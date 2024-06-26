document.addEventListener('DOMContentLoaded', function() {
    function setupToggleForContainer(container) {
        const list = container.querySelector('.list');
        const listItems = Array.from(list.children);
        const visibleItemCount = 5; // Number of items to show initially

        if (listItems.length > 6) {
            // Hide all items beyond the first visibleItemCount
            listItems.forEach((item, index) => {
                if (index >= visibleItemCount) {
                    item.classList.add('hidden');
                }
            });

            // Create and append the "and more.." item
            const moreItem = document.createElement('li');
            moreItem.classList.add('flex', 'gap-3');
            moreItem.innerHTML = `
                <span class="flex-shrink-0">
                    <img class="w-5 md:w-[22px] h-5 md:h-[22px] relative top-0.5" src="assets/images/check.svg" alt="check"/>
                </span>
                <span>and more..</span>
            `;
            list.appendChild(moreItem);

            const toggleButton = container.querySelector('.toggle-btn');
            toggleButton.classList.remove('hidden'); // Show toggle button
            toggleButton.addEventListener('click', function() {
                // Toggle visibility of items beyond the first visibleItemCount
                listItems.forEach((item, index) => {
                    if (index >= visibleItemCount) {
                        item.classList.toggle('hidden');
                    }
                });

                // Toggle the "and more.." item visibility
                moreItem.classList.toggle('hidden');

                // Update button text and image rotation
                const buttonText = toggleButton.querySelector('span');
                const buttonImage = toggleButton.querySelector('img');
                if (buttonText.textContent.includes('More Info')) {
                    buttonText.textContent = 'Collapse';
                    buttonImage.classList.remove('-rotate-90');
                    buttonImage.classList.add('rotate-90');
                } else {
                    buttonText.textContent = 'More Info';
                    buttonImage.classList.remove('rotate-90');
                    buttonImage.classList.add('-rotate-90');
                }
            });
        } else {
            // If there are less than or equal to 6 items, hide the toggle button
            const toggleButton = container.querySelector('.toggle-btn');
            toggleButton.classList.add('hidden');
        }
    }

    // Setup toggle functionality for all containers on the page
    document.querySelectorAll('.toggle-container').forEach(setupToggleForContainer);
});



document.addEventListener('DOMContentLoaded', function() {
    // Function to setup the toggle functionality
    function setupToggleForContainerFull(container) {
        const contentFull = container.querySelector('.content-full');
        const toggleButton = container.querySelector('.toggle-btn-full');

        // Initially hide the content
        contentFull.style.display = 'none';

        // Event listener for the toggle button
        toggleButton.addEventListener('click', function() {
            // Check the current state and toggle accordingly
            if (contentFull.style.display === 'none') {
                // If hidden, show the content
                contentFull.style.display = '';
                toggleButton.querySelector('span').textContent = 'Collapse';
                toggleButton.querySelector('img').classList.remove('-rotate-90');
                toggleButton.querySelector('img').classList.add('rotate-90');
            } else {
                // If shown, hide the content
                contentFull.style.display = 'none';
                toggleButton.querySelector('span').textContent = 'More Info';
                toggleButton.querySelector('img').classList.remove('rotate-90');
                toggleButton.querySelector('img').classList.add('-rotate-90');
            }
        });
    }

    // Setup toggle functionality for the specified container
    document.querySelectorAll('.toggle-container-full').forEach(setupToggleForContainerFull);
});


 


 
 