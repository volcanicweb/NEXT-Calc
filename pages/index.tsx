import { FC } from 'react';
import React , { useState ,useRef } from 'react';
import {
  Select,
  TextInput,
  Box,
  Flex,
  Space,
  NumberInput,
  Textarea,
  Divider,
  Text,
  Grid,
  Button,
  Group,
  Radio ,
  CopyButton,
  Center,
} from '@mantine/core';

import { useForm } from '@mantine/form';

const Home: FC = () => {

 
  const form = useForm({
    initialValues: {
      day1: 0,
    hour1: 0,
    minute1: 0,
    second1: 0,
    day2: 0,
    hour2: 0,
    minute2: 0,
    second2: 0,
    day3: 0,
    hour3: 0,
    minute3: 0,
    second3: 0,
    calculate : 0,
    },
    
  });


  const calculation = (e:any)=>{
    e.preventDefault();

    console.log(form.values)

    form.values.day3 =110;
    
  
  }

  return (
    <Grid h={'100%'} m={0}>
      <Grid.Col
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          backgroundColor: '#f7f7f7',
          borderRight: '1px solid',
          borderColor: '#D9D9D9',
        })}
        sm={6}
        >
        <Box py={24} px={'16px'} w={{ base: '100%' }}>

        <form onSubmit={calculation}>

        <Center>
          <Flex
            mih={50}
            
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >

          <NumberInput
            
            name = "day1"
            placeholder="day"
            label="day"
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            {...form.getInputProps('day1')}
            // hideControls
            />

           <NumberInput
            
            name = "hour1"
            placeholder="hour"
            label="hour"
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            {...form.getInputProps('hour1')}

            // hideControls
      


            />

           <NumberInput
            
            name = "minute1"
            placeholder="minute"
            label="minute"
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('minute1')}



            />

           <NumberInput
           
            name = "second1"
            placeholder="second"
            label="second"
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('second1')}
            


            />

          </Flex>
          </Center>
          <Space h="md" />
            <Center>

              <Radio.Group
              name="favoriteFramework"
              withAsterisk
              {...form.getInputProps('calculate')}
              >
              <Group mt="xs">
                <Radio value="0" name='calculate' label="Addition+" />
                <Radio value="1" name='calculate' label="Substraction-" />
              </Group>
            </Radio.Group>
            </Center>
            <Space h="md" />
          <Space h="md" />


          <Center>
        

          <Flex
            mih={50}

            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
            >

          <NumberInput
            
            name = "day2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            {...form.getInputProps('day2')}

            />

           <NumberInput

            name = "hour2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('hour2')}
            />

           <NumberInput
            
            name = "minute2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('minute2')}


            />

           <NumberInput
          
            name = "second2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('second2')}
            />

          </Flex>
          </Center>

          <Space h="md" />

          <Center>

          <Text fw={700}>=</Text>
            </Center>

          <Space h="md" />
          <Center>
        

          <Flex
            mih={50}

            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
            >
          <NumberInput
            
            defaultValue={form.values.day3}
            value={form.values.day3}
            onLoad={()=>{form.values.day3}}
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            
            // {...form.getInputProps('day3')}
            
            />

           <NumberInput
           
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            />

           <NumberInput
            
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            />

           <NumberInput
            
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            />

          </Flex>
          </Center>

          <Center>

            <Button color="violet" type='submit'>
                Calculate
            </Button>
          </Center>
        
      </form>
        </Box>
      </Grid.Col>
      <Grid.Col sm={6}>
        <Box p="20px">
          <Flex mt="112px" direction="column" justify="center" align="center">
            <CopyButton value="Text to be copied">
              {({ copied, copy }) => (
                <Button
                  mb={50}
                  size="sm"
                  px={8}
                  variant="default"
                  onClick={copy}
                >
                  <Text>{copied ? 'Copied' : 'Copy'}</Text>
                </Button>
              )}
            </CopyButton>
            <Text size="14px" color="#202123">
              Right Side Content
            </Text>
          </Flex>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
