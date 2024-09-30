const form = document.getElementById('userForm');
    const outputDiv = document.getElementById('output');
    const submitBtn = document.getElementById('submitBtn');

    function getCheckedValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkboxes).map(checkbox => checkbox.value);
    }

    submitBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not selected';
        const hobbies = getCheckedValues('hobbies').join(', ');
        const comments = document.getElementById('comments').value;
        const profilePic = document.getElementById('profilePic').files[0]?.name || 'No file chosen';

        outputDiv.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Hobbies:</strong> ${hobbies}</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <p><strong>Profile Picture:</strong> ${profilePic}</p>
        `;
    });