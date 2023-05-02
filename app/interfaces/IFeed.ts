import { Feed } from "../types/FeedType";

export default interface IFeed extends Feed{
    generateFeed(): Feed;
}