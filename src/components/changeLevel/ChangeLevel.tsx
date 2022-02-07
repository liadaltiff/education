import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from "./change-level.module.scss";
import { LevelContext } from "../../contexts/levelContext";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const ChangeLevel = () => {
  const { setLevel } = useContext(LevelContext);

  useEffect(() => {
    setLevel(1);
  }, []);

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(parseInt(event.target.value));
  };

  return (
    <div className={classes.container}>
      <Box sx={{ minWidth: 120 }} className={classes.buttonPlacing}>
        <FormControl fullWidth>
          <Select
            className={classes.buttonStyle}
            onChange={handleLevelChange}
            defaultValue="1"
          >
            <MenuItem value={1} title="אין הנחיות מיוחדות">
              1
            </MenuItem>
            <MenuItem value={2} title="אין הנחיות מיוחדות">
              2
            </MenuItem>
            <MenuItem value={3} title="כל תלמיד צריך לקבל לפחות 0.5 מטר רבוע">
              3
            </MenuItem>
            <MenuItem value={4} title="כל תלמיד צריך לקבל לפחות 2 מטר רבוע">
              4
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
export default ChangeLevel;
