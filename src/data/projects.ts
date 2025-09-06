import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "fyta-app",
    title: "Find Your Temporary Address (FYTA)",
    description:
        "A rental property mobile application developed using Flutter and Firebase. It helps users find temporary accommodations like rooms and hostels with Google Maps integration and OTP-based authentication.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pradeep7909/FYTA",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps", "Authentication"],
  },
  {
    id: "music-app-ios",
    title: "Music App",
    description:
        "An iOS music streaming and purchasing app built using SwiftUI with Firebase backend. Features include song previews, purchase via credits, offline downloads, and user authentication.",
    icon: "/skills/swift.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pradeep7909/music-app",
    tags: ["SwiftUI", "iOS", "Firebase", "Firestore", "Authentication"],
  },
  {
    id: "ios-practice-projects",
    title: "iOS Projects (Practice Phase)",
    description:
        "A collection of iOS practice projects built using Swift and Xcode, including an e-commerce app, real-time chat, map integration, WebRTC-based calling, and dashboard with charts.",
    icon: "/skills/swift.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pradeep7909/iOS_Projects",
    tags: [
      "Swift",
      "iOS",
      "Firebase",
      "Realtime Chat",
      "MapKit",
      "WebRTC",
      "Charts",
    ],
  },
  {
    id: "chess-board-app",
    title: "Chess Board App",
    description:
        "A simple chess game built with Flutter using the chess Dart package, providing a clean and intuitive interface for two players.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pradeep7909/chess_board",
    tags: ["Flutter", "Dart", "Game Development"],
  },
];

export default projects;
