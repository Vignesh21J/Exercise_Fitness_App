import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {

        const fetchExercisesData = async () => {

            try {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
                setBodyParts(['all', ...bodyPartsData]);
            }
            catch(error) {
                console.error('Failed to fetch exercises:', error);
                setBodyParts([]);
            }

        };
        fetchExercisesData();

    },[])


    const handleSearch = async () => {  
        if(search) {
            try {

                const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
                //console.log(exercisesData);

                const searchedExercises = exercisesData.filter(
                    (exercise) => exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                )

                setSearch('');
                setExercises(searchedExercises);
            }
            catch(error) {
                console.error('Failed to fetch exercises:', error);
                setExercises([]);
            }
        }
    }






  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Awesome Exercises You <br /> Should Know
        </Typography>

        <Box position="relative" mb="72px">
            <TextField 
                sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, 
                    width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                height="76px"
                placeholder="Search Exercises"
                value={search}
                type="text"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', 
                textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', 
                position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} 
                onClick={handleSearch}>
                Search
            </Button>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises;