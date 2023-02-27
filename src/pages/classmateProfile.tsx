import { RateModal } from "@/core/components/rateModal";
import {Rating} from "@/core/components/rating";
import {SideBar} from "@/core/components/Sidebar";
import { TopBar } from "@/core/components/Topbar";
import { useModal } from "@/core/hooks/useModal";
import { Button } from "reactstrap";
import styles from "src/styles/profile.module.css";

export default function classmateProfile() {
  // TODO: API calls
  const name: string = "Joe Brandon"
  const major: string = "Software Engineering";
  const overall = {
    rating: 3.8,
    technical: 3.4,
    effort: 4.2,
    sociability: 3.1,
    contribution: 4.5
  }
  const ratings = [
    {
      user: "Kamala Harris",
      class: "SWEN-356",
      technical: 2.5,
      effort: 4.0,
      sociability: 1.0,
      contribution: 1.0,
      comment: "ofdjvwofiwnhviwegniwengweiovewrigvewrvwe brgoviwevbewiufwn begrisvbgivuweb vw vbwovrb weo vuwbebgoiuenhbsorigvweoi vgweoviuwvewioeuvngwveoiugvwovigwmeovgwumeewruebotvhwivthtvwoeimvgmnwo emivmoivhn"
    }, {
      user: "Obamna",
      class: "SWEN-356",
      technical: 2.0,
      effort: 5.0,
      sociability: 1.5,
      contribution: 0.5,
      comment: "Let me be clear"
    }
  ];
  let htmlRatings = [];
  for (let index in ratings) {
    htmlRatings.push(<Rating key={index} rating={ratings[index]}></Rating>);
  }
  //define submitRate
  const {isOpen, toggle} = useModal();


  return (
    <>
      <TopBar></TopBar>
      {isOpen ? <RateModal isOpen={isOpen} toggle={toggle} rateName = {name}
      submitRate={function (): void {
        throw new Error("Function not implemented.");
      } }/> : <></>}
      <div className="flex">
        <SideBar></SideBar>
        <div className={styles.content}>
          <h2>{name}</h2>
          <h3 className={styles.major}>{major}</h3>
          <div className={styles.avgRatingArea}>
            <div className={styles.overallRatingArea}>
              <span className={styles.overallRating}>{overall.rating}</span>/5
              <div><Button onClick={toggle} className={styles.rateButton}style ={{borderRadius: 10, overflow: 'hidden'}}>Rate</Button></div>
            </div>
            <div>
              <div className={styles.avgRatingDistribution}>
                <div className={styles.title}>Average Rating Distribution</div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Technical</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.technical / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.technical}</span>/5</div>
                </div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Effort</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.effort / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.effort}</span>/5</div>
                </div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Sociability</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.sociability / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.sociability}</span>/5</div>
                </div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Contribution</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.contribution / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.contribution}</span>/5</div>
                </div>
              </div>
              <div className={styles.ratingsOverall}>Based on {ratings.length} ratings overall</div>
            </div>
          </div>
          <div className={styles.ratingsTitle}>Ratings:</div>
          {htmlRatings}
        </div>
      </div>
    </>
  )
}





/*
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
  */

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