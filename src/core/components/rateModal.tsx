import React, {FunctionComponent, useState} from 'react';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface RateModalProps {
    rateName: string;
    isOpen: boolean;
    toggle: () => void;
    message?: string;
    submitRate: (tech: number, effort: number, sociability: number, contribution: number, comments: string, overallRating: number) => void;
}


export const RateModal: FunctionComponent<RateModalProps> = (props) => {
    const [techAbility, setTechAbility] = useState(0);
    const [effort, setEffort] = useState(0);
    const [sociability, setSociability] = useState(0);
    const [contributions, setContributions] = useState(0);
    const [comments, setComments] = useState("");
    const [overall, setOverall] = useState(0);


    const handleSubmit = () => {
        props.submitRate(techAbility, effort, sociability, contributions, comments, overall)
    }

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader>
                Rate {props.rateName}
            </ModalHeader>
            <ModalBody>
                <Label for="field1" >Technical Ability</Label>
                <Input placeholder='0.0' id="field1" last_name="technical" onChange={(e) => setTechAbility(parseInt(e.target.value))}
                       type="text"/>
                <Label for="field2">Effort</Label>
                <Input placeholder='0.0' id="field2" name="effort" onChange={(e) => setEffort(parseInt(e.target.value))}
                       type="text"/>
                <Label for="field3">Socialbility</Label>
                <Input placeholder='0.0' id="field3" name="socaibility" onChange={(e) => setSociability(parseInt(e.target.value))}
                       type="text"/>
                <Label for="field4">Contribution</Label>
                <Input placeholder='0.0' id="field4" name="contribution" onChange={(e) => setContributions(parseInt(e.target.value))}
                       type="text"/>
                <Label for="field5">Comments:</Label>
                <Input id="field5" name="comments" onChange={(e) => setComments(e.target.value)}
                       type="text"/>
                <Label for="field6">Overall Rating</Label>
                <Input placeholder='0.0' id="field6" name="overall" onChange={(e) => setOverall(parseInt(e.target.value))}/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleSubmit} color='success'>Rate</Button>
            </ModalFooter>
        </Modal>
    )
        ;
};

/*
import { Component } from "react";
import {Label, Input, ModalBody, ModalFooter, Button} from 'reactstrap';

class Rate extends Component{
    constructor(props)
    {
        super(props);
        let values = {classMateName: null, technicalAbility:null, effort: null, socialbility:null, comments:null, overallRating:null};
        this.state = {data: values};
    }


    addclassMateName = (e) =>
     {
         this.state.data.title = e.target.value;
         this.setState({data: this.state.data});
     }

    addtechnicalAbility = (e) => {
        this.state.data.issueNumber = e.target.value;
        this.setState({data: this.state.data})
    }

    addEffort = (e) => {
        this.state.data.publisher = e.target.value;
        this.setState({data: this.state.data})
    }
    
    addSociabiliity = (e) => {
        this.state.data.publicationDate = e.target.value;
        this.setState({data: this.state.data})
    }
    addComments = (e) => {
        this.state.data.creators = e.target.value;
        this.setState({data: this.state.data})
    }
    addOverallRating= (e) => {
        this.state.data.description = e.target.value;
        this.setState({data: this.state.data})
    }
    addContributions= (e) => {
        this.state.data.description = e.target.value;
        this.setState({data: this.state.data})
    }
    onSave = ()=>
    {
        this.props.updateSave(this.state.data);
    }

    render()
    {
        return(
            <div>

                <ModalBody>
                <Label for="field1">name</Label>
                    <Input id="field1"  name="title"
                            type="text"   onChIssueange={this.addclassMateName}  /> {}
                    <Label for="field2">Techical Ability</Label>
                    <Input id="field2"  last_name="issueNum"
                            type="text"   onChange={this.addtechnicalAbility}/>
                    <Label for="field3">Effort</Label>
                    <Input id="field3"  name="pub"
                            type="text"   onChange={this.addEffort}/>

                    <Label for="field4">Socialbility</Label>
                    <Input id="field4"  name="pub_date"
                            type="text"  onChange={this.addSociabiliity} />
                     <Label for="field5">Contribution</Label>
                    <Input id="field5"  name="creators"
                            type="text"  onChange={this.addContributions} />
                     <Label for="field6">Comments:</Label>
                    <Input id="field6"  name="creators"
                            type="text"  onChange={this.addComments} />
                     <Label for="field7">Overall Rating</Label>
                    <Input id="field7"  name="creators"
                            type="text"  onChange={this.addOverallRating} />
                </ModalBody>
                <ModalFooter>
                    <Button color='success' onClick={this.onSave}>ADD</Button>
                </ModalFooter>


            </div>
        )
    }
}
export default Rate;
*/