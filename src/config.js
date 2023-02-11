const LIST_TYPES = {
   BACKLOG: "backlog",
   READY: "ready",
   IN_PROGRESS: "inProgress",
   DONE: "finished",
};

const LIST_COPY = {
   [LIST_TYPES.BACKLOG]: "Backlog",
   [LIST_TYPES.READY]: "Ready",
   [LIST_TYPES.IN_PROGRESS]: "In progress",
   [LIST_TYPES.DONE]: "Finished",
};

const LIST_COLORS = {
   [LIST_TYPES.BACKLOG]: "red",
   [LIST_TYPES.READY]: "red",
   [LIST_TYPES.IN_PROGRESS]: "red",
   [LIST_TYPES.DONE]: "red",
};

export { LIST_TYPES, LIST_COPY, LIST_COLORS };
