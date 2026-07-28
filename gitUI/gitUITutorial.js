//debug
// function activateAllNextButtons() {
//     // Select all buttons with the class 'next-button'
//     const nextButtons = document.querySelectorAll('.next-button');

//     nextButtons.forEach(button => {
//         // Enable the button
//         button.disabled = false;
//     });

//     console.log('All Next buttons activated.');
// }

// // Call this function to activate all 'Next' buttons
// activateAllNextButtons();

// Translations
const translations = {
    en: {
        tutorialTitle: "Personalization Tutorial",
        tutorialSubtitle: "Follow the next steps for an introduction to the personalization operations.",
        colorTitle: "Font Color",
        colorInstructions: "<b>Instruction:</b> Use the extension to change the color of the text element below.",
        colorTip: "<b>Tip:</b> After selecting an operation, the extension will highlight the borders of all webpage elements that are available for personalization.",
        colorText: "Personalize my text color!",
        bgColorTitle: "Background Color",
        bgColorInstructions: "<b>Instruction:</b> Use the extension to change the background color of the text element below.",
        bgColorText: "Personalize my background color!",
        removeTitle: "Remove Element",
        removeInstructions: "<b>Instruction:</b> Use the extension to remove the text element below. Do it without affecting the other elements of the webpage.",
        removeTip: "<b>Tip:</b> Typically, webpages have hidden elements and boxes. When selecting the element to remove, select the box closest to the text.",
        removeText: "You can remove me!",
        fontSizeTitle: "Font Size",
        fontSizeInstructions: "<b>Instruction:</b> Use the extension to change the font size of the element below.",
        fontSizeText: "Personalize my font size!",
        fontSizeTitle2: "Propagable Font Size",
        fontSizeInstructions2: "<b>Instruction:</b> Use the extension to change the font size of both elements below at the same time.",
        fontSizeTip2: "<b>Tip:</b> You can apply some operations to multiple elements at the same time by applying an operation to the box in which they are contained. When personalizing, look for the borders of the box that contain both elements.",
        fontSizeText2: "Personalize our font size!",
        fontSizeHeader2: "I am a huge text!",
        resizeTitle: "Resize Element",
        resizeInstructions: "<b>Instruction:</b> Use the extension to resize the element below.",
        resizeTip: "<b>Dica:</b> To resize an element, you may also need to resize nearby elements.",
        resizeText: "Can you resize me?",
        reorderTitle: "Reorder Element",
        reorderInstructions: "<b>Instruction:</b> Use the extension to switch the order of the two elements below.",
        reorderBox1: "This is Item 1",
        reorderBox2: "This is Item 2",
        moveTitle: "Move Element",
        moveInstructions: "<b>Instruction:</b> Use the extension to move one item from one list to another.",
        shortcutTitle: "Add Shortcut",
        shortcutInstructions: "<b>Instruction:</b> Use the extension to insert a shortcut in the box below.",
        shortcutTip: "<b>Tip:</b> Add a shortcut to where you want to go next (this is the last step).",
        next: "Next",
        finish: "Finish",
        back: "Previous",
        colorChanged: "Color changed successfully to",
        bgColorChanged: "Background color changed successfully to",
        elementRemoved: "Element removed successfully!",
        wrongElementRemoved: 'You removed the wrong element. Use the extension "back" option and try again!',
        fontSizeChanged: "Font size changed successfully to",
        bothFontSizeChanged: "Font size changed successfully to",
        tryBothFontSize: 'Try to change both font sizes at once. Use the extension "back" option and try again!',
        resized: "Element resized successfully to",
        reordered: "Elements reordered successfully!",
        moved: "Element moved successfully!",
        shortcutAdded: "Shortcut added successfully!",
        shortcutAddedMove: "Shortcut added, please move it!",
        tutorialFinished: 'Tutorial Completed! You can now start personalizing! Next time, remember to save the adaptation!'
    },
    pt: {
        tutorialTitle: "Tutorial de Personalização",
        tutorialSubtitle: "Siga os próximos passos para uma introdução às operações de personalização.",
        colorTitle: "Cor da Fonte",
        colorInstructions: "<b>Instrução:</b> Use a extensão para mudar a cor do elemento de texto abaixo.",
        colorTip: "<b>Dica:</b> Após selecionar uma operação, a extensão destacará as bordas de todos os elementos da página disponíveis para personalização.",
        colorText: "Personalize a cor do meu texto!",
        bgColorTitle: "Cor de Fundo",
        bgColorInstructions: "<b>Instrução:</b> Use a extensão para mudar a cor de fundo do elemento de texto abaixo.",
        bgColorText: "Personalize a cor do meu fundo!",
        removeTitle: "Remover Elemento",
        removeInstructions: "<b>Instrução:</b> Use a extensão para remover o elemento de texto abaixo. Faça isso sem afetar os outros elementos da página.",
        removeTip: "<b>Dica:</b> Normalmente, páginas da web têm elementos e caixas ocultas. Ao selecionar o elemento para remover, selecione a caixa mais próxima do texto.",
        removeText: "Pode remover-me!",
        fontSizeTitle: "Tamanho da Fonte",
        fontSizeInstructions: "<b>Instrução:</b> Use a extensão para alterar o tamanho da fonte do elemento abaixo.",
        fontSizeText: "Personalize o tamanho da minha fonte!",
        fontSizeTitle2: "Tamanho de Fonte Propagável",
        fontSizeInstructions2: "<b>Instrução:</b> Use a extensão para alterar o tamanho da fonte de ambos os elementos abaixo ao mesmo tempo.",
        fontSizeTip2: "<b>Dica:</b> Pode aplicar algumas operações a vários elementos ao mesmo tempo, aplicando uma operação à caixa em que eles estão contidos. Ao personalizar, procure as bordas da caixa que contem os dois elementos.",
        fontSizeText2: "Personalize o nosso tamanho de fonte!",
        fontSizeHeader2: "Eu sou um texto enorme!",
        resizeTitle: "Redimensionar Elemento",
        resizeInstructions: "<b>Instrução:</b> Use a extensão para redimensionar o elemento abaixo.",
        resizeText: "Pode redimensionar-me?",
        resizeTip: "<b>Dica:</b> Para redimensionar um elemento pode ter de redimensionar também elementos próximos.",
        reorderTitle: "Reordenar Elemento",
        reorderInstructions: "<b>Instrução:</b> Use a extensão para trocar a ordem dos dois elementos abaixo.",
        reorderBox1: "Esta é o Item 1",
        reorderBox2: "Esta é o Item 2",
        moveTitle: "Mover Elemento",
        moveInstructions: "<b>Instrução:</b> Use a extensão para mover um item de uma lista para outra.",
        shortcutTitle: "Adicionar Atalho",
        shortcutInstructions: "<b>Instrução:</b> Use a extensão para inserir um atalho para um URL na caixa abaixo.",
        shortcutTip: "<b>Dica:</b> Adicione um atalho para o website que quer visitar de seguida (este é o último passo!).",
        next: "Próximo",
        finish: "Concluir",
        back: "Anterior",
        colorChanged: "Cor alterada com sucesso para",
        bgColorChanged: "Cor de fundo alterada com sucesso para",
        elementRemoved: "Elemento removido com sucesso!",
        wrongElementRemoved: 'Removeu o elemento errado. Use a opção "Atrás" da extensão e tente novamente!',
        fontSizeChanged: "Tamanho da fonte alterado com sucesso para",
        bothFontSizeChanged: "Tamanho da fonte alterado com sucesso para",
        tryBothFontSize: 'Tente alterar ambos os tamanhos de fonte ao mesmo tempo. Use a opção "Atrás" da extensão e tente novamente!',
        resized: "Elemento redimensionado com sucesso para",
        reordered: "Elementos reordenados com sucesso!",
        moved: "Elemento movido com sucesso!",
        shortcutAdded: "Atalho adicionado com sucesso!",
        shortcutAddedMove: "Atalho adicionado, por favor, mova-o!",
        tutorialFinished: 'Tutorial concluído! Agora pode começar a personalizar! Da próxima vez, lembre-se de guardar a adaptação!'
    }
};

// Retrieve the language from localStorage or set it to 'en' by default
let currentLanguage = localStorage.getItem('currentLanguage') || 'en'; 

// Function to switch language
function switchLanguage() {
    // Toggle the language
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';

    // Store the selected language in localStorage
    localStorage.setItem('currentLanguage', currentLanguage);

    // Call the function to update the UI based on the selected language
    updateLanguage();
}

// Helper function to translate messages
function translate(key) {
    return translations[currentLanguage][key];
}

// Update text content based on selected language
function updateLanguage() {
    document.getElementById('tutorial-title').innerHTML = translations[currentLanguage].tutorialTitle;
    document.getElementById('tutorial-subtitle').innerHTML = translations[currentLanguage].tutorialSubtitle;
    
    // Font Color operation
    document.getElementById('color-title').innerHTML = translations[currentLanguage].colorTitle;
    document.getElementById('color-instructions').innerHTML = translations[currentLanguage].colorInstructions;
    document.getElementById('color-tip').innerHTML = translations[currentLanguage].colorTip;
    document.getElementById('color-text').innerHTML = translations[currentLanguage].colorText;
    
    // Background Color operation
    document.getElementById('bg-color-title').innerHTML = translations[currentLanguage].bgColorTitle;
    document.getElementById('bg-color-instructions').innerHTML = translations[currentLanguage].bgColorInstructions;
    document.getElementById('bg-color-text').innerHTML = translations[currentLanguage].bgColorText;

    // Remove Element operation
    document.getElementById('remove-title').innerHTML = translations[currentLanguage].removeTitle;
    document.getElementById('remove-instructions').innerHTML = translations[currentLanguage].removeInstructions;
    document.getElementById('remove-tip').innerHTML = translations[currentLanguage].removeTip;
    document.getElementById('remove-text').innerHTML = translations[currentLanguage].removeText;

    // Font Size operation
    document.getElementById('font-size-title').innerHTML = translations[currentLanguage].fontSizeTitle;
    document.getElementById('font-size-instructions').innerHTML = translations[currentLanguage].fontSizeInstructions;
    document.getElementById('font-size-text').innerHTML = translations[currentLanguage].fontSizeText;

    // Propagable Font Size operation
    document.getElementById('font-size-title2').innerHTML = translations[currentLanguage].fontSizeTitle2;
    document.getElementById('font-size-instructions2').innerHTML = translations[currentLanguage].fontSizeInstructions2;
    document.getElementById('font-size-tip2').innerHTML = translations[currentLanguage].fontSizeTip2;
    document.getElementById('font-size-header2').innerHTML = translations[currentLanguage].fontSizeHeader2;
    document.getElementById('font-size-text2').innerHTML = translations[currentLanguage].fontSizeText2;

    // Resize Element operation
    document.getElementById('resize-title').innerHTML = translations[currentLanguage].resizeTitle;
    document.getElementById('resize-instructions').innerHTML = translations[currentLanguage].resizeInstructions;
    document.getElementById('resize-text').innerHTML = translations[currentLanguage].resizeText;

    // Reorder Element operation
    document.getElementById('reorder-title').innerHTML = translations[currentLanguage].reorderTitle;
    document.getElementById('reorder-instructions').innerHTML = translations[currentLanguage].reorderInstructions;
    document.getElementById('reorder-box1').innerHTML = translations[currentLanguage].reorderBox1;
    document.getElementById('reorder-box2').innerHTML = translations[currentLanguage].reorderBox2;

    // Move Element operation
    document.getElementById('move-title').innerHTML = translations[currentLanguage].moveTitle;
    document.getElementById('move-instructions').innerHTML = translations[currentLanguage].moveInstructions;

    // Shortcut operation
    document.getElementById('shortcut-title').innerHTML = translations[currentLanguage].shortcutTitle;
    document.getElementById('shortcut-instructions').innerHTML = translations[currentLanguage].shortcutInstructions;
    document.getElementById('shortcut-tip').innerHTML = translations[currentLanguage].shortcutTip;

    // Update buttons (Next/Finish)
    const buttons = document.querySelectorAll('.next-button');
    buttons.forEach(button => {
        button.innerHTML = button.id.includes('shortcut') ? translations[currentLanguage].finish : translations[currentLanguage].next;
    });

    // Update back button text
    const buttonsBack = document.querySelectorAll('.back-button');
    buttonsBack.forEach(button => {
        button.textContent = translations[currentLanguage].back;
    });

    // Update language toggle text
    document.getElementById("language-toggle").innerHTML = currentLanguage === 'en' ? 'Português' : 'English';
}

let currentStep = 0; // Track current step index
const steps = [
    'color-operation',
    'bg-color-operation',
    'remove-operation',
    'font-size-operation',
    'font-size2-operation',
    'resize-operation',
    'reorder-operation',
    'move-operation',
    'shortcut-operation'
];

// Add back navigation based on URL fragment
function goToStepFromURL() {
    const urlHash = window.location.hash.substring(1); // Get the hash value without #
    if (urlHash) {
        const stepElement = document.getElementById(urlHash + '-operation');
        if (stepElement) {
            const operations = document.querySelectorAll('.operation-container');
            operations.forEach(op => op.style.display = 'none'); // Hide all operations
            stepElement.style.display = 'block'; // Show current operation
            stepElement.scrollIntoView(); // Scroll to the step
            currentStep = steps.indexOf(urlHash + '-operation'); // Update current step based on URL
        }
    }
}

// Run this function on page load to navigate to the correct step
window.addEventListener('load', goToStepFromURL);

// Listen for URL fragment changes (e.g., if user uses browser navigation)
window.addEventListener('hashchange', goToStepFromURL);

// Show next operation
function showNextOperation() {
    if (currentStep < steps.length - 1) {
        document.getElementById(steps[currentStep]).style.display = 'none'; // Hide current step
        currentStep++; // Move to next step
        document.getElementById(steps[currentStep]).style.display = 'block'; // Show next step
        updateUrlHash(); // Update URL with current step
    }
}

// Show previous operation
function showPreviousOperation() {
    if (currentStep > 0) {
        document.getElementById(steps[currentStep]).style.display = 'none'; // Hide current step
        currentStep--; // Move to previous step
        document.getElementById(steps[currentStep]).style.display = 'block'; // Show previous step
        updateUrlHash(); // Update URL with current step
    }
}

// Update URL hash based on current step
function updateUrlHash() {
    window.location.hash = steps[currentStep].replace('-operation', '');
}

// Function to observe style changes
function observeStyleChange(element, callback) {
    const observer = new MutationObserver(() => {
        callback();
    });

    observer.observe(element, {
        attributes: true, // Watch for attribute changes
        childList: false, // Do not observe changes to child elements
        subtree: false // Do not observe changes in the entire subtree
    });
}

// Set up mutation observers for operations
function setupObservers() {
    const colorZone = document.getElementById('color-text');
    const bgColorZone = document.getElementById('bg-color-text');
    const removeZone = document.getElementById('remove-text');
    const removeBoxZone = document.getElementById('remove-box');
    const fontSizeZone = document.getElementById('font-size-text');
    const fontSizeZone2 = document.getElementById('font-size-text2');
    const fontSizeZoneHeader2 = document.getElementById('font-size-header2');
    const resizeZone = document.getElementById('resize-box');
    const reorderZone = document.getElementById('reorder-zone');
    const moveZone = document.getElementById('move-zone');


    // Color Change Observer
    observeStyleChange(colorZone, () => {
        const newColor = window.getComputedStyle(colorZone).color;
        if (newColor !== 'rgb(0, 0, 0)') {
            document.getElementById('color-message').textContent = `${translate('colorChanged')} ${newColor}!`;
            document.getElementById('color-next').disabled = false;
        }
    });

    // Background Color Change Observer
    observeStyleChange(bgColorZone, () => {
        const newBgColor = window.getComputedStyle(bgColorZone).backgroundColor;
        if (newBgColor !== 'rgb(255, 255, 255)' && newBgColor !==  'rgba(0, 0, 0, 0)') {
            document.getElementById('bg-color-message').textContent = `${translate('bgColorChanged')} ${newBgColor}!`;
            document.getElementById('bg-color-next').disabled = false;
        }
    });

    // Element Remove Observer
    observeStyleChange(removeZone, () => {
        if (window.getComputedStyle(removeZone).display === 'none') {
            document.getElementById('remove-message').classList.remove("message-error");
            document.getElementById('remove-message').textContent = translate('elementRemoved');
            document.getElementById('remove-next').disabled = false;
        }
    });

    // Element RemoveBox Observer
    observeStyleChange(removeBoxZone, () => {
        if (window.getComputedStyle(removeBoxZone).display === 'none') {
            document.getElementById('remove-message').classList.add("message-error");
            document.getElementById('remove-message').textContent = translate('wrongElementRemoved');
            document.getElementById('remove-next').disabled = true;
        }
    });

    // Font Size Change Observer
    observeStyleChange(fontSizeZone, () => {
        const newFontSize = window.getComputedStyle(fontSizeZone).fontSize;
        if(newFontSize != "16px"){
            document.getElementById('font-size-message').textContent = `${translate('fontSizeChanged')} ${newFontSize}!`;
            document.getElementById('font-size-next').disabled = false;
        }
    });

    // Font Size 2 Change Observer
    observeStyleChange(fontSizeZone2, () => {
        const newFontSize = window.getComputedStyle(fontSizeZone2).fontSize;
        const newFontSizeHeader = window.getComputedStyle(fontSizeZoneHeader2).fontSize;
        if(newFontSize == "16px" && newFontSizeHeader == "30px"){
            document.getElementById('font-size-message2').classList.remove("message-error");
            document.getElementById('font-size-message2').textContent = '';
        }else{
            if(newFontSize != "16px" && newFontSizeHeader != "30px"){
                document.getElementById('font-size-message2').classList.remove("message-error");
                document.getElementById('font-size-message2').textContent = `${translate('bothFontSizeChanged')} ${newFontSizeHeader} e ${newFontSize}!`;
                document.getElementById('font-size-next2').disabled = false;
            }else if((newFontSize != "16px" && newFontSizeHeader == "30px") || (newFontSize == "16px" && newFontSizeHeader != "30px")){
                document.getElementById('font-size-message2').classList.add("message-error");
                document.getElementById('font-size-message2').textContent = translate('tryBothFontSize');
            }
        }
    });

    // Resize Observer
    observeStyleChange(resizeZone, () => {
        const newHeight = window.getComputedStyle(resizeZone).height;
        const newWidth = window.getComputedStyle(resizeZone).width;
        document.getElementById('resize-message').textContent = `${translate('resized')} ${newWidth} x ${newHeight}!`;
        document.getElementById('resize-next').disabled = false;
    });

    // Reorder elements observer
    const initialOrder = Array.from(reorderZone.children).map(child => child.id); // Capture initial order
    const reorderObserver = new MutationObserver(() => {
        const currentOrder = Array.from(reorderZone.children).map(child => child.id); // Capture current order
        if (JSON.stringify(initialOrder) !== JSON.stringify(currentOrder)) {
            document.getElementById('reorder-message').textContent = translate('reordered');
            document.getElementById('reorder-next').disabled = false;
        }
    });

    // Start observing reorderZone for child list changes
    reorderObserver.observe(reorderZone, { childList: true });

    // Move Observer
    observeStyleChange(moveZone, () => {
        const box1Items = Array.from(document.getElementById('list1').children);
        const box2Items = Array.from(document.getElementById('list2').children);

        // Check if any items in list1 have moved to list2 or vice versa
        const itemsMoved = box1Items.some(item => item.hasAttribute('data-original-box') && item.getAttribute('data-original-box') === 'box2') ||
                        box2Items.some(item => item.hasAttribute('data-original-box') && item.getAttribute('data-original-box') === 'box1');
        if (itemsMoved) {
            document.getElementById('move-message').textContent = translate('moved');
            document.getElementById('move-next').disabled = false; // Enable next button
        }
    });

    // Function to setup original box attributes when initializing
    function setupInitialBoxes() {
        const box1Items = document.getElementById('list1').children;
        const box2Items = document.getElementById('list2').children;

        Array.from(box1Items).forEach(item => {
            item.setAttribute('data-original-box', 'box1');
        });

        Array.from(box2Items).forEach(item => {
            item.setAttribute('data-original-box', 'box2');
        });
    }

    // Initialize move operation
    function initMoveOperation() {
        setupInitialBoxes(); // Set up original boxes
        document.getElementById('move-message').textContent = ''; // Clear any previous messages
    }

    // Call this function to initialize the move operation
    initMoveOperation();

    let shortcutElement = null; // To store the inserted shortcut element

// Function to detect if a shortcut is placed above or inside the shortcut zone
function checkShortcutPosition() {
    const shortcutZone = document.getElementById('shortcut-zone');
    const shortcutZoneRect = shortcutZone.getBoundingClientRect();

    if (shortcutElement) {
        const shortcutRect = shortcutElement.getBoundingClientRect();

        // Check if the shortcut is positioned within or above the shortcut zone
        const isAboveOrInZone = shortcutRect.bottom > shortcutZoneRect.top &&
                                shortcutRect.top < shortcutZoneRect.bottom &&
                                shortcutRect.right > shortcutZoneRect.left &&
                                shortcutRect.left < shortcutZoneRect.right;
                                
        if (isAboveOrInZone) {
            document.getElementById('shortcut-message').textContent = translations[currentLanguage].shortcutAdded;
            document.getElementById('shortcut-next').disabled = false; // Enable next button
        }
    }
}

// Observer to detect when a shortcut is inserted into the document
function observeShortcutInsertions() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                // Check if the added node is an anchor tag (shortcut element)
                if (node.tagName === 'A' && node.href.includes('https://')) {
                    shortcutElement = node; // Store the shortcut element
                    document.getElementById('shortcut-message').textContent = translations[currentLanguage].shortcutMoved;
                    
                    // Once shortcut is added, start observing its movements
                    observeShortcutMovement(); 
                }
            });
        });
    });

    // Observe the body for added nodes (for when the shortcut is inserted)
    observer.observe(document.body, { childList: true, subtree: true });
}

// Monitor position changes using MutationObserver
function observeShortcutMovement() {
    if (shortcutElement) {
        const moveObserver = new MutationObserver(() => {
            checkShortcutPosition(); // Check position whenever a change occurs
        });

        // Observe the shortcut element for attribute or style changes (position changes)
        moveObserver.observe(shortcutElement, { attributes: true, subtree: true, attributeFilter: ['style'] });

        // Also call checkShortcutPosition on an interval in case direct style mutation isn't detected (fallback)
        const intervalCheck = setInterval(() => {
            checkShortcutPosition();
            // If the shortcut is successfully moved, clear the interval to stop further checks
            if (document.getElementById('shortcut-next').disabled === false) {
                clearInterval(intervalCheck);
            }
        }, 500); // Check every 500ms
    }
}

// Initialize both observers
function initShortcutOperation() {
    observeShortcutInsertions();  // Detect when shortcut is added
}

// Call this function to start the operation
initShortcutOperation();
}

// Add Event Listeners for Back buttons
document.getElementById('color-back').addEventListener('click', showPreviousOperation);
document.getElementById('bg-color-back').addEventListener('click', showPreviousOperation);
document.getElementById('remove-back').addEventListener('click', showPreviousOperation);
document.getElementById('font-size-back').addEventListener('click', showPreviousOperation);
document.getElementById('font-size-back2').addEventListener('click', showPreviousOperation);
document.getElementById('resize-back').addEventListener('click', showPreviousOperation);
document.getElementById('reorder-back').addEventListener('click', showPreviousOperation);
document.getElementById('move-back').addEventListener('click', showPreviousOperation);
document.getElementById('shortcut-back').addEventListener('click', showPreviousOperation);

// Add Event Listeners for Next buttons
document.getElementById('color-next').addEventListener('click', showNextOperation);
document.getElementById('bg-color-next').addEventListener('click', showNextOperation);
document.getElementById('remove-next').addEventListener('click', showNextOperation);
document.getElementById('font-size-next').addEventListener('click', showNextOperation);
document.getElementById('font-size-next2').addEventListener('click', showNextOperation);
document.getElementById('resize-next').addEventListener('click', showNextOperation);
document.getElementById('reorder-next').addEventListener('click', showNextOperation);
document.getElementById('move-next').addEventListener('click', showNextOperation);
document.getElementById('shortcut-next').addEventListener('click', () => {
    alert(translations[currentLanguage].tutorialFinished)
});

// Initialize tutorial
function initTutorial() {
    updateLanguage();
    const urlHash = window.location.hash.substring(1); // Get the hash value without #
    if (urlHash) {
        const stepIndex = steps.indexOf(urlHash + '-operation');
        if (stepIndex !== -1) {
            currentStep = stepIndex; // Set currentStep based on URL
        }
    }
    
    document.querySelectorAll('.operation').forEach(step => step.style.display = 'none'); // Hide all steps
    document.getElementById(steps[currentStep]).style.display = 'block'; // Show current step
    updateUrlHash(); // Update URL on initialization
    setupObservers(); // Set up mutation observers
}

// Run initialization on page load
window.onload = initTutorial;
