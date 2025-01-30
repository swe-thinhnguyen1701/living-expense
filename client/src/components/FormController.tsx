import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const FormController = () => {
    return (
        <>
            <Tabs variant="unstyled" display="flex" flexDir={{base: "column", md: "row"}} maxWidth="700px">
                <TabList display="flex" flexDir={{base: "row", md: "column"}} gap={2} mb={{base: 4, md: 0}}>
                    <Tab width="100%" _selected={{ color: "white", bg: "blue.500" }} fontWeight="bold">
                        Income
                    </Tab>
                    <Tab width="100%" _selected={{ color: "white", bg: "blue.500" }} fontWeight="bold">
                        Expense
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <IncomeForm />
                    </TabPanel>
                    <TabPanel>
                        <ExpenseForm />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default FormController;