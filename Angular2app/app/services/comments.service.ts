import { Injectable } from "@angular/core";
import {Http, Response, URLSearchParams } from "@angular/http";
import { Comment } from "./Comment";
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'



@Injectable()
export class CommentsService {

    private url = "http://tyrist.dev/api/CommentsController.php";
    // public commentsCurrentObserver: Observable<any>;
    // public serviceSubscriber = new BehaviorSubject<any>([]);
    // public initCommentsPromise: Promise<any>;

    constructor(private http: Http) {
        /*this.initCommentsPromise = this.getComments();
        this.serviceSubscriber.next(this.initCommentsPromise);
        this.commentsCurrentObserver = this.serviceSubscriber.asObservable();*/
    }

    public getComments(id): Promise<Comment[]> {

        let data = new URLSearchParams();
        data.append('get_data', JSON.stringify({'hotel_id' : id,'amount': 200}));
        let Comments = this.http.post(this.url,data)
            .toPromise()
            .then((succes) => {
                console.log(succes);
                if(succes.json().status != "error") {
                    return this.extractComments(succes);
                }
                else {
                    console.log(succes.json().response);
                }
            })
            .catch(this.handleError);

        return Comments;
    }
    public addComment(comment: Comment) {
        let data = new URLSearchParams();
        data.append('insert_data', JSON.stringify(comment));
        let response = this.http.post(this.url,data)
            .toPromise()
            .then((succes) => {
                console.log(succes);
                if(succes.json().status != "error") {
                    return "Success!";
                }
                else {
                    return "Failed!";
                }
            })
            .catch(this.handleError);

        return response;
    }

    private extractComments(response: Response) {

        let res = response.json().response;
        let Comments: Comment[] = [];
        for (let i = 0; i < res.length; i++) {
            Comments.push(new Comment(res[i].id, res[i].hotel_id, res[i].text,res[i].author,res[i].date,res[i].approved));
        }
        return Comments;
    }

    private handleError(error: any): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }

}