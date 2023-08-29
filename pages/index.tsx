import { FC, ReactHTMLElement } from 'react';
import React , { ChangeEvent,useState ,useRef } from 'react';
import { useInputState } from '@mantine/hooks';
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



  
  
  const [day1Value, setday1Value] = useState<number | ''>(0);
  const [day2Value, setday2Value] = useState<number | ''>(0);
  const [day3Value, setday3Value] = useState<number | ''>(0);

  const [hour1Value , sethour1Value] = useState<number | ''>(0);
  const [hour2Value , sethour2Value] = useState<number | ''>(0);
  const [hour3Value , sethour3Value] = useState<number | ''>(0);

  const [min1Value , setmin1Value] = useState<number | ''>(0);
  const [min2Value , setmin2Value] = useState<number | ''>(0);
  const [min3Value , setmin3Value] = useState<number | ''>(0);

  const [sec1Value , setsec1Value] = useState<number | ''>(0);
  const [sec2Value , setsec2Value] = useState<number | ''>(0);
  const [sec3Value , setsec3Value] = useState<number | ''>(0);


  const [value, setValue] = useState('add');
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    if(value == "add"){
      console.log("adding");
      let sec = Number(sec1Value)+Number(sec2Value);
      let carry = sec/60;
      setsec3Value(sec%60);
      let min =carry + Number(min1Value)+Number(min2Value);
      carry = min/60;
      setmin3Value(min%60);
      let hour = carry + Number(hour1Value) + Number(hour2Value);
      carry = hour/24;
      sethour3Value(hour%24);
      let day = carry + Number(day1Value) + Number(day2Value);
      setday3Value(day);
    }
    else if(value == "sub"){
      
    }
  };
  return (
    <Grid h={'100%'} m={0}>
      <Grid.Col
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          backgroundColor: theme.colors.dark[7],
          borderRight: '1px solid',
          borderColor: '#D9D9D9',
          
        })}
        sm={6}
        >
        <Box py={24} px={'16px'} w={{ base: '100%' }} >

        <form onSubmit={handleSubmit}>

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
            id='day1'
            placeholder="day"
            label="day"
            min={0}
            error
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            {...form.getInputProps('day1')}
            value={day1Value} onChange={setday1Value} 
            
            // hideControls
            />

           <NumberInput
            
            name = "hour1"
            placeholder="hour"
            label="hour"
            min={0}
            max={23}
            error
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            {...form.getInputProps('hour1')}
            value={hour1Value} onChange={sethour1Value}
            // hideControls
      


            />

           <NumberInput
            
            name = "minute1"
            placeholder="minute"
            label="minute"
            min={0}
            max={59}
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('minute1')}
            value={min1Value} onChange={setmin1Value}
            />

           <NumberInput
           
            name = "second1"
            placeholder="second"
            label="second"
            min={0}
            max={59}
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('second1')}
            value={sec1Value} onChange={setsec1Value}
            />

          </Flex>
          </Center>
          <Space h="md" />
            <Center>

              <Radio.Group
              
              name="favoriteFramework"
              withAsterisk
              {...form.getInputProps('calculate')}
              value={value}
              onChange={setValue}
              >
              <Group mt="xs">
                <Radio value="add" name='calculate' label="Addition+" />
                <Radio value="sub" name='calculate' label="Substraction-" />
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
            value={day2Value} onChange={setday2Value}
            />

           <NumberInput

            name = "hour2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('hour2')}
            value={hour2Value} onChange={sethour2Value}
            />

           <NumberInput
            
            name = "minute2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('minute2')}
            value={min2Value} onChange={setmin2Value}
            />

           <NumberInput
          
            name = "second2"
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            // hideControls
            {...form.getInputProps('second2')}
            value={sec2Value} onChange={setsec2Value}
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
            
            onLoad={()=>{form.values.day3}}
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            value={day3Value} onChange={setday3Value}
            // {...form.getInputProps('day3')}
            
            />

           <NumberInput
           
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            value={hour3Value} onChange={sethour3Value}
            />

           <NumberInput
            
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            value={min3Value} onChange={setmin3Value}
            />

           <NumberInput
            
            placeholder=""
            label=""
            styles={{ input: { width: 90 , textAlign: 'center' } }}
            hideControls
            value={sec3Value} onChange={setsec3Value}
            />

          </Flex>
          </Center>

          <Center>

            <Button color="violet" type='submit'
           
            >
                Calculate
            </Button>
          </Center>
        
      </form>
        </Box>
      </Grid.Col>
      <Grid.Col 
      sx={(theme) => ({
        boxShadow: theme.shadows.md,
        backgroundColor: theme.colors.dark[4],
        borderRight: '1px solid',
        borderColor: '#D9D9D9',
      })}
      sm={6}>
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
            <Text size="14px" color='#E6FCF5' >

              Right Side Content
            </Text>
          </Flex>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
