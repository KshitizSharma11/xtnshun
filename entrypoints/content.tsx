import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './components/Modal';
import Icon from './components/Icon';

export default defineContentScript({
  matches: ['*://*.linkedin.com/*'],  // Match all LinkedIn pages
  main() {
    console.log('Injecting icon and modal into LinkedIn.');

    const observeDOMChanges = () => {
      const observer = new MutationObserver(() => {
        if (window.location.href.includes('/messaging/thread/') || window.location.href.includes('/feed')) {
          console.log('Navigated to LinkedIn messages page');
          injectIconIfFieldExists(); // Trigger the icon injection
        }
      });

      // Observe for DOM changes on the body element
      observer.observe(document.body, { childList: true, subtree: true });
    };

    const injectIconIfFieldExists = () => {
      const inputField = document.querySelector('.msg-form__contenteditable');
      
      if (inputField) {
        console.log('Input field found, adding icon.');

        // Modify input field styles
        inputField.style.position = 'relative'; // Make input field relative
        
        // Check if the icon is already injected
        const existingIcon = document.getElementById('reply-icon');
        if (!existingIcon) {
          const iconContainer = document.createElement('div');
          iconContainer.id = 'reply-icon'; // Give the icon container an ID for easy access
          iconContainer.style.position = 'absolute'; // Position the icon absolutely
          iconContainer.style.right = '10px'; // Adjust right positioning
          iconContainer.style.bottom = '10px'; // Adjust bottom positioning

          // Render the Icon component
          const root = ReactDOM.createRoot(iconContainer);
          root.render(<Icon onClick={showModal} />);

          inputField.parentNode.appendChild(iconContainer);
          console.log('Icon added next to the input field.');
        }
      }
    };

    // Function to show modal
    const showModal = () => {
      let modalContainer = document.getElementById('custom-modal-container');

      if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'custom-modal-container';
        document.body.appendChild(modalContainer);

        const root = ReactDOM.createRoot(modalContainer);
        const closeModal = () => {
          console.log('Closing modal.');
          root.unmount();
          modalContainer.remove();
        };

        console.log('Rendering modal.');
        root.render(<Modal onClose={closeModal} />);
      } else {
        console.log('Modal is already open.');
      }
    };

    // Trigger observer on initial load
    observeDOMChanges();
  },
});
