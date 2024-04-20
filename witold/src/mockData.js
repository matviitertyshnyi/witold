export const mockBarbers = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Experienced barber with 10 years of expertise.',
    services: [
      { id: 1, name: 'Haircut', price: 20, imageUrl: '/images/haircut.jpg' },
      { id: 2, name: 'Beard Trim', price: 15, imageUrl: '/images/beard-trim.jpg' },
      { id: 3, name: 'Shave', price: 12, imageUrl: '/images/shave.jpg' },
    ],
    availableTimeslots: [
      { id: 1, date: '2023-05-01', time: '9:00 AM' },
      { id: 2, date: '2023-05-01', time: '10:00 AM' },
      { id: 3, date: '2023-05-02', time: '11:00 AM' },
    ],
    bookedTimeslots: [], // Initialize the bookedTimeslots property
    photoUrl: '/images/barber1.jpg', 
  },

  {
    id: 2,
    name: 'Jane Smith',
    description: 'Skilled in modern and classic hairstyles.',
    services: [
      { id: 1, name: 'Haircut', price: 22, imageUrl: '/images/haircut.jpg' },
      { id: 2, name: 'Coloring', price: 40, imageUrl: '/images/coloring.jpg' },
      { id: 3, name: 'Styling', price: 18, imageUrl: '/images/styling.jpg' },
    ],
    availableTimeslots: [
      { id: 1, date: '2023-05-01', time: '1:00 PM' },
      { id: 2, date: '2023-05-02', time: '2:00 PM' },
      { id: 3, date: '2023-05-03', time: '3:00 PM' },
    ],
    bookedTimeslots: [], // Initialize the bookedTimeslots property
    photoUrl: '/images/barber2.jpg', 
  },
  {
    id: 3,
    name: 'Bob Johnson',
    description: 'Specializes in beard trims and shaves.',
    services: [
      { id: 1, name: 'Beard Trim', price: 18, imageUrl: '/images/beard-trim.jpg' },
      { id: 2, name: 'Shave', price: 15, imageUrl: '/images/shave.jpg' },
      { id: 3, name: 'Styling', price: 18, imageUrl: '/images/styling.jpg' },
    ],
    availableTimeslots: [
      { id: 1, date: '2023-05-01', time: '4:00 PM' },
      { id: 2, date: '2023-05-02', time: '5:00 PM' },
      { id: 3, date: '2023-05-03', time: '6:00 PM' },
    ],
    bookedTimeslots: [], // Initialize the bookedTimeslots property
    photoUrl: '/images/barber3.jpg', 
  },
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Emily",
    quote: "I've never been happier with my haircut. Thanks, Barber Services!",
    photo: "/images/client3.jpg",
  },
  {
    id: 2,
    name: "Michael",
    quote: "Professional service and a friendly atmosphere. Highly recommend!",
    photo: "/images/client1.jpg",
  },
  {
    id: 3,
    name: "Sophia",
    quote: "Barber Services always exceeds my expectations. Love my new look!",
    photo: "/images/client2.jpg",
  },
];

export const mockHaircutPhotos = [
  { id: 1, src: "/images/hair1.jpg", alt: "Haircut 1" },
  { id: 2, src: "/images/hair2.jpg", alt: "Haircut 2" },
  { id: 3, src: "/images/hair3.jpg", alt: "Haircut 3" },
  { id: 4, src: "/images/hair4.jpg", alt: "Haircut 4" },
  { id: 5, src: "/images/hair6.jpg", alt: "Haircut 5" },
  { id: 6, src: "/images/hair5.jpg", alt: "Haircut 6" },
];


