import {makeVar} from "@apollo/client";

const workflowVar = makeVar("homepage");

const cartVar = makeVar({});

export {workflowVar, cartVar};