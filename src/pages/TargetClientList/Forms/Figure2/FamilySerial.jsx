import {
    FormControl,
    FormLabel,
    Input,
    GridItem,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    InputLeftAddon,
    InputGroup
} from '@chakra-ui/react'

export default function FamilySerial() {

    return (
        <>
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Client:</Text>
            </GridItem>
            {/* First Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Middle Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Middle Name</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Last Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Birthday */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Birthday</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
            {/*  */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Age</FormLabel>
                    <NumberInput allowMouseWheel defaultValue={10} min={10} max={100}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </GridItem>
            {/* Highest Education */}
            <GridItem colSpan={3}>
                <FormControl id="education">
                    <FormLabel>Highest Education</FormLabel>
                    <Select placeholder="Select">
                        <option>Elementary</option>
                        <option>High School</option>
                        <option>College</option>
                    </Select>
                </FormControl>
            </GridItem>
            {/* Occupation */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Occupation</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* No. Street */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>No. Street</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Barangay */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Barangay</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Municipality */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Municipality</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Province */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Province</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Spouse:</Text>
            </GridItem>
            {/* First Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Middle Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Middle Name</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Last Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Birthday */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Birthday</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
            {/* Highest Education */}
            <GridItem colSpan={4}>
                <FormControl id="education">
                    <FormLabel>Highest Education</FormLabel>
                    <Select placeholder="Select" >
                        <option>Elementary</option>
                        <option>High School</option>
                        <option>College</option>
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Occupation</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            <GridItem colSpan={6}>
                <FormControl>
                    <Text fontSize="2xl">Average Monthly Family</Text>
                    <InputGroup>
                        <InputLeftAddon children="₱" />
                        <NumberInput precision={2}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </InputGroup>
                </FormControl>
            </GridItem>
        </>
    )
}
