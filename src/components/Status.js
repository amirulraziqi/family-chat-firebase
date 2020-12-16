import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    List,
    ListItem,
    Left,
    Body,
    Thumbnail,
    Text,
    Icon,
    Fab,
    Button
} from 'native-base';
import Moment from 'moment';
import ThemeColors from '../constants/ThemeColors';
import { call } from 'react-native-reanimated';

const Status = (props) => {
    return (
        <Container>
            <ListItem avatar noBorder>
                <Left>
                    <Thumbnail source={{ uri: props.user.avatar }} />
                </Left>
                <Body>
                    <Text>My status</Text>
                    <Text note style={StyleSheet.lineHeight}>
                        Tap to add status update
                    </Text>
                </Body>
            </ListItem>
            <ListItem itemDivider style={{ marginTop: 10 }}>
                <Text>Recent updates</Text>
            </ListItem>
            <List
                dataArray={props.statusItem}
                keyExtractor={(item, index) => index + item}
                renderRow={item => (
                    <ListItem avatar>
                        <Left>
                            <Thumnail source={{ uri: item.contactAvatar }} />
                        </Left>
                        <Body>
                            <Text>{item.contactName}</Text>
                            <Text note style={StyleSheet.lineHeight}>
                                {getFormatedDate(call.time)}
                            </Text>
                        </Body>
                    </ListItem>
                )}
            />
            <Fab
                active={true}
                style={styles.fab}
                direction='up'
                position='bottomRight'
            >
                <Icon name='camera' />
                <Button style={{ backgroundColor: 'lightgrey' }}>
                    <Icon
                        style={{ color: ThemeColors.primary }}
                        type='MaterialCommunityIcons'
                        name='pencil'
                    />
                </Button>
            </Fab>
        </Container>
    );

    getFormatedDate = (date) => {
        return (
            Moment(date).format('MMMM') +
            " " +
            Moment(date).format('D') +
            ", " +
            Moment(date).format('hh:mm a')
        );
    }
}

const styles = StyleSheet.create({
    lineHeight: {
        height: 21
    },
    fab: {
        backgroundColor: ThemeColors.secondary
    }
});

export default Status;