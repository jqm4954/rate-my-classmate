import React, {FunctionComponent} from 'react';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface RateModalProps {
    isOpen: boolean;
    toggle: () => void;
    message?: string;
    rateName: string;
    submitRate: () => void;
}

export const RateModal: FunctionComponent<RateModalProps> = (props) => {
    //const [modalOpen, setModalOpen] = useState(initialMode)  //data within modal 
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader>
                {props.message}
            </ModalHeader>
            <ModalBody>
                <Label for="field1" value = {props.rateName}>Name</Label>
                <Input id="field1" name="name"
                       type="text"/> 
                <Label for="field2">Technical Ability</Label>
                <Input id="field2" last_name="technical"
                       type="text"/>
                <Label for="field3">Effort</Label>
                <Input id="field3" name="effort"
                       type="text"/>

                <Label for="field4">Socialbility</Label>
                <Input id="field4" name="socaibility"
                       type="text"/>
                <Label for="field5">Contribution</Label>
                <Input id="field5" name="contribution"
                       type="text"/>
                <Label for="field6">Comments:</Label>
                <Input id="field6" name="comments"
                       type="text"/>
                <Label for="field7">Overall Rating</Label>
                <Input id="field7" name="overall"
                       type="text"/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.submitRate} color='success'>Rate</Button>
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