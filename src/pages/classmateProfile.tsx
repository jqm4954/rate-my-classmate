import SideBar from "@/core/components/sidebar";
import TopBar from "@/core/components/topbar";
import React, { useState, FunctionComponent } from "react";
import {Input,Container, Row, Col,Button, Modal, ModalHeader, Alert} from 'reactstrap';
import styles from "src/styles/profile.module.css";
import { RateModal } from "@/core/components/rateModal";
import {useModal} from "@/core/hooks/useModal";


  export default function classmateProfile() {
  const { isShown } = useModal();
  const onConfirm = () => toggle();
  const onCancel = () => toggle();
    return (
      <>
        <TopBar></TopBar>
        <SideBar></SideBar>
        <div className={styles.content}>
        </div>
        <div>
        <React.Fragment>
      ``  <button onClick={toggle}>Open modal</button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Confirmation"
            modalContent={
              <RateModal
                onConfirm={onConfirm}
                onCancel={onCancel}
                message="Are you sure you want to Rate" addclassMateName={function (): void {
                  throw new Error("Function not implemented.");
                } } addtechnicalAbility={function (): void {
                  throw new Error("Function not implemented.");
                } } addEffort={function (): void {
                  throw new Error("Function not implemented.");
                } } addSociability={function (): void {
                  throw new Error("Function not implemented.");
                } } addContributions={function (): void {
                  throw new Error("Function not implemented.");
                } } addOverallRating={function (): void {
                  throw new Error("Function not implemented.");
                } }          />
        }
      />
    </React.Fragment>
        </div>
      </>
    )
  
  }

/*
  return (
    <>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className={styles.content}>
      </div>
      <div className="app">
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal visible={modalVisible} onClose={handleCloseModal}>
         <h2>Modal Title</h2>
         <p>Modal Content</p>
      </Modal>
    </div>
    </>
  )
}
*/

/* 
<Modal isOpen={this.state.modalSearchDatabase} toggle={this.toggleSearchDatabase}>
<ModalHeader toggle={this.toggleSearchDatabase}>Search Database</ModalHeader> {}
<SearchDatabase updateSave={this.saveSearchdb}/>
</Modal>
*/
/*
    saveSearchdb = (data) =>
    {
        this.toggleSearchDatabase()

        var list = this.state.theSearchDBList;
            if(data.title !== null){
            list.title = data.title;
            }
            if(data.issueNumber !== null){
            list.issueNumber = data.issueNumber;
            }
            if(data.publisher !== null){
            list.publisher = data.publisher;
            }
            if(data.publicationDate !== null){
            list.publicationDate = data.publicationDate;
            }
            if(data.creators !== null){
            list.creators = data.creators;
            }
        this.setState({theSearchDBList:list})
        this.fetchSearchDBData();
        console.log() 

        alert("Searching DB for - T: "+this.state.theSearchDBList.title+", in: "+this.state.theSearchDBList.issueNumber+",p: "+this.state.theSearchDBList.publisher+", pd: "+this.state.theSearchDBList.publicationDate+", c: "+this.state.theSearchDBList.creators)
    }
  */