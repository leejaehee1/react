import * as React from 'react';
import {
    List as RaList,
    ListProps,
    SimpleListLoading,
    ReferenceField,
    TextField,
    useListContext,
    ExportButton,
    SortButton,
    TopToolbar,
    CreateButton,
    Pagination,
    useGetIdentity,
} from 'react-admin';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

import { Avatar } from './Avatar';
import { Status } from '../misc/Status';
import { TagsList } from './TagsList';
import { ContactListFilter } from './ContactListFilter';
import { Contact } from '../types';


export const Punchs = props => {
    return (
        <RaList
            {...props}    
        >
            
            
        </RaList>
    )
};