const dummyData = [
    {
        id: 1,
        username: "philzcoffee",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than just coffees!",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Looks delicious!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Can't wait to try it!",
            },
        ],
    },
    {
        id: 2,
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 2,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 3,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
            {
                id: 4,
                username: "themexican_leprechaun",
                text: "What a setup",
            },
        ],
    },
    {
        id: 3,
        username: "rajpatel",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7m6Iw3R07gneSxsjT8zkLY-HVqcLKqrB_8Lje2f5Z1r46m1rIaCu2ynxA99ytXnmCQE&usqp=CAU',
        likes: 500,
        timestamp: "July 19th 2017, 12:42:09 pm",
        comments: [
            {
                id: 36,
                username: "twinkle",
                text: "Summer Time",
            },
            {
                id: 37,
                username: "michael",
                text: "Omg that view was crazy",
            },
            {
                id: 38,
                username: "leprechaun",
                text: "What a setup",
            },
            {
                id: 39,
                username: "futbol",
                text: "injustice",
            },
        ],
    },
    {
        id: 4,
        username: "michael",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        likes: 2794,
        timestamp: "July 21th 2017, 05:35:47 pm",
        comments: [
            {
                id: 36,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 37,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
        ],
    },
    {
        id: 5,
        username: "leprechaun",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
        likes: 3783,
        timestamp: "July 12th 2017, 01:28:24 pm",
        comments: [
            {
                id: 36,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 37,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
        ],
    },
    {
        id: 6,
        username: "dennis_futbol",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1597848141462-ee8426faf145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        likes: 329,
        timestamp: "July 19th 2017, 06:28:32 pm",
        comments: [
            {
                id: 36,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 37,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
            {
                id: 38,
                username: "themexican_leprechaun",
                text: "What a setup",
            },
        ],
    },
    {
        id: 7,
        username: "ludo",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        likes: 872,
        timestamp: "July 23th 2017, 06:12:36 pm",
        comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than just coffees!",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Looks delicious!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Can't wait to try it!",
            },
        ],
    },
    {
        id: 8,
        username: "biancasaurus",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
        likes: 1262,
        timestamp: "July 14th 2017, 02:23:35 pm",
        comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than just coffees!",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Looks delicious!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Can't wait to try it!",
            },
        ],
    },
];

export default dummyData;
