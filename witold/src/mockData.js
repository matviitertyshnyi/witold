export const mockBarbers = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Experienced barber with 10 years of expertise.',
      services: [
        { id: 1, name: 'Haircut', price: 20 },
        { id: 2, name: 'Beard Trim', price: 15 },
        { id: 3, name: 'Shave', price: 12 },
      ],
      availableTimeslots: [
        { id: 1, date: '2023-05-01', time: '9:00 AM' },
        { id: 2, date: '2023-05-01', time: '10:00 AM' },
        { id: 3, date: '2023-05-02', time: '11:00 AM' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Skilled in modern and classic hairstyles.',
      services: [
        { id: 1, name: 'Haircut', price: 22 },
        { id: 2, name: 'Coloring', price: 40 },
        { id: 3, name: 'Styling', price: 18 },
      ],
      availableTimeslots: [
        { id: 1, date: '2023-05-01', time: '1:00 PM' },
        { id: 2, date: '2023-05-02', time: '2:00 PM' },
        { id: 3, date: '2023-05-03', time: '3:00 PM' },
      ],
    },
    {
      id: 3,
      name: 'Bob Johnson',
      description: 'Specializes in beard trims and shaves.',
      services: [
        { id: 1, name: 'Beard Trim', price: 18 },
        { id: 2, name: 'Shave', price: 15 },
      ],
      availableTimeslots: [
        { id: 1, date: '2023-05-01', time: '4:00 PM' },
        { id: 2, date: '2023-05-02', time: '5:00 PM' },
        { id: 3, date: '2023-05-03', time: '6:00 PM' },
      ],
    },
  ];