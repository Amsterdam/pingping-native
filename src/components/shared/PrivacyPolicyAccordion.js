import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import ChevronDownIcon from '../../assets/svg/icons/ChevronDownIcon';
import ChevronUpIcon from '../../assets/svg/icons/ChevronUpIcon';
import theme from '../../config/theme';
import faqItems from '../../helpers/faqItems';
import Body from '../typography/Body';
import Title from '../typography/Title';

function PrivacyPolicyAccordion({ open, toggleOpen }) {
	return (
		<View style={styles.policyContainer}>
			<TouchableWithoutFeedback onPress={toggleOpen}>
				<View style={styles.iconButton}>
					<Title style={styles.title} variant="h7" align="center">
						Privacy Policy
					</Title>

					{open ? <ChevronUpIcon /> : <ChevronDownIcon />}
				</View>
			</TouchableWithoutFeedback>
			{open && (
				<View style={styles.paddingPolicy}>
					<Body variant="b3" align="justify">
						We staan voor gelijkwaardigheid en gelijke kansen voor alle jongeren.
						Saamhorigheid is ons uitgangspunt. Dit betekent dat we elkaar kunnen en
						willen helpen. We spreken dan over samenredzaamheid. We pakken sociaal
						belangrijke maatschappelijke vragen op. De oplossing voor deze vraagstukken
						vinden we in de mensen zelf. Code, data en tech kunnen oplossingen voor deze
						vraagstukken sneller realiseren. Als we daarvoor jouw gegevens nodig hebben,
						zijn dat nooit meer gegevens dan noodzakelijk. Natuurlijk heb je het recht
						om jouw gegevens te verwijderen en kunnen we je altijd vertellen waarom de
						app een bepaalde route voor jou adviseert. We slaan zo weinig mogelijk
						gegevens op en alleen met jouw toestemming (die je altijd weer gewoon kan
						intrekken). Jouw toestemming geef je door het gebruik van de app. Maar je
						kan de app ook gebruiken zonder persoonlijke gegevens te delen. Je krijgt
						dan geen persoonlijke route. Logisch toch? Oh ja, we verkopen of geven je
						gegevens niet aan een derde. Natuurlijk willen we de app steeds verbeteren
						en willen we weten of Ping Ping jou inderdaad helpt om je (financiële) zaken
						te regelen. Zo niet: dan moeten we iets anders bedenken. Hiervoor analyseren
						we jouw gebruik. We bekijken bijvoorbeeld hoe vaak je de app gebruikt en of
						het lukt om de route af te maken. Zo proberen wij te begrijpen of de app
						werkt en of het nodig is te verbeteren. Deze gegevens slaan we zonder jouw
						persoonsgegevens op.
					</Body>
					<Body variant="b3" style={styles.faqTitle}>
						Praktische vragen over jouw privacy:
					</Body>

					{faqItems.map((item, index) => (
						<View key={item.question} style={styles.faqItemContainer}>
							<Title variant="h7">{`${index + 1}. ${item.question}`}</Title>
							<Body variant="b5">{item.answer}</Body>
						</View>
					))}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	policyContainer: {
		backgroundColor: theme.colors.background,
		margin: theme.spacing.s,
		borderColor: theme.colors.black,
		borderWidth: 1,
		alignSelf: 'stretch',
	},
	iconButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: theme.spacing.xs,
	},
	paddingPolicy: {
		padding: theme.spacing.m,
	},
	faqTitle: {
		marginTop: theme.spacing.m,
		marginBottom: theme.spacing.m,
	},
	faqItemContainer: {
		marginTop: theme.spacing.xxs,
		marginBottom: 5,
	},
});

PrivacyPolicyAccordion.propTypes = {
	open: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired,
};

export default PrivacyPolicyAccordion;
