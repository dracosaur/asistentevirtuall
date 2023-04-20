import { useState } from "react";
import FirstPageContent from "../FirstPageContent";
import SecondPageContent from "../SecondPageContent";

export const ContentControll = () => {
    const [selectedStep, setSelectedStep] = useState<any>(0);

    const nextStep = () => {
        setSelectedStep(selectedStep + 1)
    }

    const backStep = () => {
        setSelectedStep(selectedStep - 1)
    }

    const renderStepContent = (step: any) => {
    
        const components:any = {
            0: <FirstPageContent {...{ nextStep, backStep}}/>,
            1: <SecondPageContent {...{ nextStep, backStep}}/>
        }
        
        return components[step];
    }

    return renderStepContent(selectedStep);
}

export default ContentControll;