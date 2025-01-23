import {
    Typography
  } from "@mui/material";

export const columns = [
  {
    label: "Name",
    field: "name",
  },
  {
    label: "Description",
    field: "description",
  },
  {
    label: "Head",
    field: "head",
    layout: (row) => (
        <Typography>
        {row.head.map((i, key) => (
          <li key={i.id}>{i.value}</li>
        ))}
      </Typography>
    ),
  },
  {
    label: "Branches",
    field: "bramches",
  },
  {
    label: "Status",
    field: "status",
    layout: (row) => (
      <Typography>
        {row.status.map((i, key) => (
          <li key={i.id}>{i.value}</li>
        ))}
      </Typography>
    ),
  },
];
