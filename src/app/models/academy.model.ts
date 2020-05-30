export class Academy {
  public dateAssigned: string;
  public dateStarted: string;
  public dateCompleted: string;
  public team: string;
  public progress: number;
  public timeSpent: number;
  public reviewScore: number;
  public trainerReview: number;
  public certificate: string;
  public quizScore: number;
  public quizAttempts: number;
  public status: string;
  public title: string;


  constructor(dateAssigned: string, dateStarted: string, dateCompleted: string,
              team: string, progress: number, timeSpent: number, reviewScore: number,
              trainerReview: number, certificate: string, quizScore: number, quizAttempts: number,
              status: string, title: string) {
    this.dateAssigned = dateAssigned;
    this.dateStarted = dateStarted;
    this.dateCompleted = dateCompleted;
    this.team = team;
    this.progress = progress;
    this.timeSpent = timeSpent;
    this.reviewScore = reviewScore;
    this.trainerReview = trainerReview;
    this.certificate = certificate;
    this.quizScore = quizScore;
    this.quizAttempts = quizAttempts;
    this.status = status;
    this.title = title;
  }
}
