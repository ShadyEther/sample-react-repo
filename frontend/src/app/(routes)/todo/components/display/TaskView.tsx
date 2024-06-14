import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container, Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Chip, ListItemText, Checkbox, SelectChangeEvent } from '@mui/material';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  taskName: string;
  deadline: string;
  priority: number;
  status: boolean;
}

interface TaskViewProps {
  tasks: Task[];
  updateTask: (updatedTask: Task) => void;
  removeTask: (taskId: number) => void;
}

interface FilterList {
  [key: string]: number | boolean
}




const TaskView: React.FC<TaskViewProps> = ({ tasks, updateTask, removeTask }) => {

  const [filterList, setFilterList] = useState<FilterList[]>([])
  const [displayList, setDisplayList] = useState<Task[]>(tasks)

  const [searchKeyword, setSearchKeyword] = useState<string>()

  function intersection<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return Array.from(new Set(array1.filter(value => set2.has(value))));
  }

  function union<T>(array1: T[], array2: T[]): T[] {
    const set = new Set([...array1, ...array2]);
    return Array.from(set);
  }


  function sortTasks(tasks: Task[], key: keyof Task, ascending: boolean = true): Task[] {
    return tasks.sort((a, b) => {
      if (a[key] < b[key]) {
        return ascending ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  }

  function filterTasks(tasks: Task[], key: keyof Task, value: any): Task[] {
    return tasks.filter(task => task[key] === value);
  }

  function searchTasks(tasks: Task[], query: string): Task[] {
    if (query) {
      return tasks.filter(task => task.taskName.toLowerCase().includes(query.toLowerCase()));
    }
  }


  function handleDisplay(keyword: string, filters: FilterList[]) {
    //find the list after searching
    //from that list apply filters one by one ..
    //last find itersection of all
    let searchedTasks: Task[] = tasks
    if (keyword) {
      searchedTasks = searchTasks(tasks, keyword)
    }

    let priorityFilterTasks: Task[] = []
    let statusFilterTasks: Task[] = []

    filters.map((filter) => {
      const parsedFilter = JSON.parse(filter)

      if (parsedFilter.priority) {
        priorityFilterTasks = union(priorityFilterTasks, filterTasks(searchedTasks, 'priority', parsedFilter.priority))
      }

      if (parsedFilter.status !== undefined) {
        statusFilterTasks = union(statusFilterTasks, filterTasks(searchedTasks, 'status', parsedFilter.status))
      }
      // console.log(JSON.parse(filter))
    })
    // console.log("search tasks", searchedTasks)
    // console.log("priority tasks", priorityFilterTasks)
    // console.log("status tasks", statusFilterTasks)
    // console.log("intersection tasks", intersection(priorityFilterTasks,statusFilterTasks))


    if (priorityFilterTasks.length !== 0 && statusFilterTasks.length !== 0) {
      setDisplayList(intersection(priorityFilterTasks, statusFilterTasks))
    }
    else if (priorityFilterTasks.length !== 0) {
      setDisplayList(priorityFilterTasks)
    }
    else if (statusFilterTasks.length !== 0) {
      setDisplayList(statusFilterTasks)
    }
    else {
      setDisplayList(searchedTasks)
    }
  }

  function handleFilters(event: SelectChangeEvent<typeof filterList>) {
    const { target: { value }, } = event;
    setFilterList(value)
  }

  useEffect(() => {
    // console.log(searchKeyword)
    // console.log(filterList)
    handleDisplay(searchKeyword, filterList)

  }, [searchKeyword, filterList])

  useEffect(() => {
    setDisplayList(tasks)
  }, [tasks])






  const finalDisplay: () => JSX.Element = () => {

    if (!displayList || displayList.length === 0) {
      return (
        <Container sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          <Typography variant='h4'>No tasks found!! 😴</Typography>
        </Container>
      )
    }
    else {
      return (
        <Container>
          <Grid container spacing={2} justifyContent='center'>
            {displayList.map(task => (
              <Grid item xs={12} sm={6} md={4} key={task.id}>
                <TaskCard
                  task={task}
                  updateTask={updateTask}
                  removeTask={removeTask}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )
    }
  }



  return (
    <div>
      <Container>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} sm={7} md={7}>

            <TextField
              label='Search 🔍'
              value={searchKeyword}
              onChange={(e) => { setSearchKeyword(e.target.value) }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={5} md={5}>
            <FormControl fullWidth>
              <InputLabel id="priority-label">Filter 🔻</InputLabel>
              <Select
                label="Filter 🔻"
                multiple
                value={filterList}
                onChange={handleFilters}
                renderValue={(selected) => (
                  <>{
                    selected.map((item) => {
                      const itemlabel = JSON.parse(item).label;
                      return <Chip label={itemlabel} sx={{ marginLeft: '1em' }} />
                    })
                  }
                  </>
                )}

                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      '&::after': {
                        content: '"✔️ "',                        
                      }
                    }
                  }
                }}
              >
                <MenuItem value={JSON.stringify({ priority: 1, label: 'High' })}>
                  High
                </MenuItem>
                <MenuItem value={JSON.stringify({ priority: 2, label: 'Medium' })}>
                  Medium
                </MenuItem>
                <MenuItem value={JSON.stringify({ priority: 3, label: 'Low' })}>
                  Low
                </MenuItem>
                <MenuItem value={JSON.stringify({ status: true, label: 'Complete' })}>
                  Completed
                </MenuItem>
                <MenuItem value={JSON.stringify({ status: false, label: 'Incomplete' })}>
                  Incomplete
                </MenuItem>

              </Select>
            </FormControl>


          </Grid>


        </Grid>

      </Container>
      <Container sx={{
        marginTop: '1%'
      }}>
        {finalDisplay()}
      </Container>

    </div>
  )
};

export default TaskView;
