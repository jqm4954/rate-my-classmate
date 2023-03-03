import React, { FunctionComponent, useState } from 'react';
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styles from "src/styles/modal.module.css";

interface RateModalProps {
    rateName: string;
    isOpen: boolean;
    toggle: () => void;
    message?: string;
    submitRate: (tech: number, effort: number, sociability: number, contribution: number, comments: string, overallRating: number) => void;
}


export const RateModal: FunctionComponent<RateModalProps> = (props) => {
    const [classCode, setClassCode] = useState("");
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
        <Modal isOpen={props.isOpen} toggle={props.toggle} className={styles.modal}>
            <div className={styles.header}>
                Rate
                <svg className={styles.x} onClick={(e) => {/* TODO: close modal*/ }} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.2515 4.51923C39.7372 4.01629 40.006 3.34269 39.9999 2.6435C39.9939 1.9443 39.7134 1.27547 39.219 0.781049C38.7246 0.286628 38.0557 0.00617659 37.3565 0.000100807C36.6573 -0.00597498 35.9837 0.262811 35.4808 0.748566L20.0328 16.1966L4.5848 0.748566C4.08186 0.262811 3.40825 -0.00597498 2.70906 0.000100807C2.00987 0.00617659 1.34104 0.286628 0.846616 0.781049C0.352194 1.27547 0.0717432 1.9443 0.0656674 2.6435C0.0595916 3.34269 0.328378 4.01629 0.814133 4.51923L16.2621 19.9672L0.814133 35.4152C0.559439 35.6612 0.356286 35.9555 0.216529 36.2808C0.0767712 36.6062 0.00320773 36.9561 0.000130883 37.3102C-0.00294596 37.6642 0.0645247 38.0154 0.198607 38.3431C0.332689 38.6708 0.530698 38.9686 0.781078 39.219C1.03146 39.4693 1.3292 39.6673 1.65692 39.8014C1.98464 39.9355 2.33579 40.003 2.68987 39.9999C3.04395 39.9968 3.39387 39.9233 3.71921 39.7835C4.04455 39.6437 4.33881 39.4406 4.5848 39.1859L20.0328 23.7379L35.4808 39.1859C35.9837 39.6717 36.6573 39.9404 37.3565 39.9344C38.0557 39.9283 38.7246 39.6478 39.219 39.1534C39.7134 38.659 39.9939 37.9902 39.9999 37.291C40.006 36.5918 39.7372 35.9182 39.2515 35.4152L23.8035 19.9672L39.2515 4.51923Z" fill="#493829" />
                </svg>
            </div>
            <ModalBody className={styles.body}>
                <div className={styles.inputRow}>
                    <div className={styles.inputHolder}>
                        <label className={styles.label} htmlFor="name">Classmate Name</label>
                        <input className={styles.input} type="text" id="name" value={props.rateName} disabled={true} />
                    </div>
                    <div className={styles.inputHolder}>
                        <label className={styles.label} htmlFor="course-code">Course Code</label>
                        <input className={styles.input} type="text" id="course-code" onChange={(e) => setClassCode(e.target.value)} />
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.inputHolder}>
                        <label className={styles.label} htmlFor="tech-ab">Technical Ability</label>
                        <input className={styles.input} type="number" id="tech-ab" onChange={(e) => setTechAbility(e.target.valueAsNumber)} placeholder="0.0" max="5.0" min="0.0" step="0.5" />
                    </div>
                    <div className={styles.inputHolder}>
                        <label className={styles.label} htmlFor="effort">Effort</label>
                        <input className={styles.input} type="number" id="effort" onChange={(e) => setEffort(e.target.valueAsNumber)} placeholder="0.0" max="5.0" min="0.0" step="0.5" />
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.inputHolder}>
                        <label className={styles.label} htmlFor="social">Sociability</label>
                        <input className={styles.input} type="number" id="social" onChange={(e) => setSociability(e.target.valueAsNumber)} placeholder="0.0" max="5.0" min="0.0" step="0.5" />
                    </div>
                    <div className={styles.inputHolder}>
                        <label className={styles.label} htmlFor="cont">Contribution</label>
                        <input className={styles.input} type="number" id="cont" onChange={(e) => setContributions(e.target.valueAsNumber)} placeholder="0.0" max="5.0" min="0.0" step="0.5" />
                    </div>
                </div>
                <label className={styles.label} htmlFor="comment">Comments:</label>
                <div className={styles.textareaHolder}>
                    <textarea className={styles.textarea} id="comment" onChange={(e) => setComments(e.target.value)}></textarea>
                    <div className={styles.letterCount}>{comments.length}/250</div>
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.overallTitle}>Overall Rating:</div>
                </div>
                <div className={styles.submit}>Submit</div>
            </ModalBody>
        </Modal>
    );
};
