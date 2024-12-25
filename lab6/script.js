document.getElementById('fetchUserBtn').addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const users = data.results;
        displayUsersInfo(users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('usersList').innerHTML = '<p>Failed to load user data. Please try again.</p>';
      });
  });
  
  function displayUsersInfo(users) {
    const usersListDiv = document.getElementById('usersList');
    usersListDiv.innerHTML = ''; 
  
    users.forEach(user => {
      const userInfoDiv = document.createElement('div');
      userInfoDiv.classList.add('user-info');
      userInfoDiv.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>City:</strong> ${user.location.city}</p>
        <p><strong>Postcode:</strong> ${user.location.postcode}</p>
        <p><strong>Cell:</strong> ${user.cell}</p>
      `;
      usersListDiv.appendChild(userInfoDiv);
    });
  }
  