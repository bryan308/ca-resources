export interface ITableProps {
  example_id?: number
}

export interface BorderProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
  text: string
}

export interface GuideImageProps {
  src: string
  alt: string
  width: number
  maxWidth: number
  height: number
  className?: string
}

export interface IListProps {
  listStyle?: "type" | "position"
  type?: "lower-alpha" | "decimal" | "disc" | "circle" | "square"
  startVal?: number
  position?: "inside" | "outside"
  image?: string
}

interface ITblCellSpannig {
  th: {
    th1: {
      text: string
      span: string
      spanVal: number
    }[]
    th2: number[]
  }
  td: string[]
}

interface IorderedList {
  ol1: string[]
  ol2: string[]
  ol3: string[]
}

const tblCellSpan: ITblCellSpannig = {
  th: {
    th1: [
      {
        text: "Assignments",
        span: "col",
        spanVal: 3,
      },
      {
        text: "Laboratory",
        span: "col",
        spanVal: 2,
      },
      {
        text: "Ability to Stay Awake",
        span: "row",
        spanVal: 2,
      },
    ],
    th2: [1, 2, 3, 1, 2],
  },
  td: ["10%", "10%", "10%", "30%", "36%", "4%"],
}

const orderedList: IorderedList = {
  ol1: [
    "Planning",
    "Analysis",
    "Design",
    "Development",
    "Testing",
    "Implementation",
    "Maintenance",
  ],
  ol2: [
    "Open a Text Editor (Notepad) or Source Code Editor (Sublime Text) program.",
    "Save the file as .html (File - save as - select HTML).",
    "Write your HTML code.",
    "Double-click on the saved file, and it will be opened in your default browser.",
  ],
  ol3: [
    "Mozilla Firefox",
    "Google Chrome",
    "Opera Browser",
    "Microsoft Edge",
    "Safari Browser",
  ],
}

const studentData = [
  { name: "Juan Dela Cruz", id: "2021-21067", age: 18 },
  { name: "Pedro Cruise", id: "2021-21114", age: 19 },
  { name: "Simon Ibarra", id: "2021-21584", age: 18 },
]

export { orderedList, tblCellSpan, studentData }
