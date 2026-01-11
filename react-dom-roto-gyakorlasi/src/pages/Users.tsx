const users = [
  {
    name: "John Doe",
    email: "john.doe@undone.com",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@gmail.com",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@outlook.com",
  },
  {
    name: "Robert Wilson",
    email: "robert.wilson@company.org",
  },
  {
    name: "Sarah Brown",
    email: "sarah.brown@mail.net",
  },
  {
    name: "David Martinez",
    email: "david.martinez@work.io",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.anderson@inbox.com",
  },
  {
    name: "James Taylor",
    email: "james.taylor@business.co",
  },
  {
    name: "Amanda Thomas",
    email: "amanda.thomas@webmail.org",
  },
  {
    name: "Christopher Lee",
    email: "christopher.lee@tech.dev",
  },
  {
    name: "Jennifer White",
    email: "jennifer.white@creative.studio",
  },
];

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
